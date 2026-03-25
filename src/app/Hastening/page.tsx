"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { churchGrowthData, dataCategories, YearlyStats } from "@/data/churchGrowth";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDark;
}

export default function Home() {
  const [selectedMetric, setSelectedMetric] = useState<string>("totalMembership");
  const isDark = useDarkMode();

  const selectedCategory = dataCategories.find((c) => c.key === selectedMetric);

  // Filter data to only include years where the selected metric has a value
  const filteredData = churchGrowthData.filter(
    (d) => d[selectedMetric as keyof YearlyStats] !== null
  );

  const firstYear = filteredData.length > 0 ? filteredData[0].year : 1830;
  const lastYear =
    filteredData.length > 0 ? filteredData[filteredData.length - 1].year : 2024;

  const formatNumber = (value: number) => {
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return value.toString();
  };

  // Generate sensible tick values for the X axis based on data range
  const yearSpan = lastYear - firstYear;
  const tickInterval = yearSpan > 150 ? 20 : yearSpan > 80 ? 10 : 5;
  const xTicks: number[] = [];
  const firstTick = Math.ceil(firstYear / tickInterval) * tickInterval;
  for (let y = firstTick; y <= lastYear; y += tickInterval) {
    xTicks.push(y);
  }
  if (xTicks[0] - firstYear > tickInterval / 2) {
    xTicks.unshift(firstYear);
  }
  if (!xTicks.includes(lastYear) && lastYear - xTicks[xTicks.length - 1] > tickInterval / 3) {
    xTicks.push(lastYear);
  }

  // Chart colors that adapt to dark mode
  const gridColor = isDark ? "#374151" : "#e5e7eb";
  const tickColor = isDark ? "#9ca3af" : undefined;
  const tooltipBg = isDark ? "#1f2937" : "#fff";
  const tooltipBorder = isDark ? "#374151" : "#e5e7eb";
  const tooltipText = isDark ? "#e5e7eb" : "#111827";

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-3 inline-block"
          >
            &larr; Back to SeleniumThorium Development
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Church Growth Statistics
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Interactive charts tracking the growth of The Church of Jesus Christ
            of Latter-day Saints
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Metric selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          {dataCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedMetric(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedMetric === category.key
                  ? "text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              style={
                selectedMetric === category.key
                  ? { backgroundColor: category.color }
                  : {}
              }
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Main chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {selectedCategory?.label} ({firstYear}–{lastYear})
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12, fill: tickColor }}
                ticks={xTicks}
                domain={[firstYear, lastYear]}
              />
              <YAxis tickFormatter={formatNumber} tick={{ fontSize: 12, fill: tickColor }} />
              <Tooltip
                formatter={(value: number) => [
                  value != null ? value.toLocaleString() : "N/A",
                  selectedCategory?.label,
                ]}
                labelFormatter={(label) => `Year: ${label}`}
                contentStyle={{
                  backgroundColor: tooltipBg,
                  border: `1px solid ${tooltipBorder}`,
                  borderRadius: "8px",
                  color: tooltipText,
                }}
                labelStyle={{ color: tooltipText }}
              />
              <Legend wrapperStyle={isDark ? { color: "#d1d5db" } : undefined} />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                name={selectedCategory?.label}
                stroke={selectedCategory?.color}
                strokeWidth={3}
                dot={filteredData.length <= 50 ? { r: 2 } : false}
                activeDot={{ r: 5 }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {dataCategories.map((category) => {
            const latestValue =
              churchGrowthData[churchGrowthData.length - 1][
                category.key as keyof YearlyStats
              ];
            return (
              <div
                key={category.key}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.label}</p>
                <p className="text-2xl font-bold mt-1" style={{ color: category.color }}>
                  {latestValue != null ? Number(latestValue).toLocaleString() : "—"}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">As of 2024</p>
              </div>
            );
          })}
        </div>

        {/* Sources */}
        <div className="mt-8 text-xs text-gray-400 dark:text-gray-500">
          <p>
            Sources: 2013 Church Almanac, Official Church Statistical Reports,
            churchofjesuschristtemples.org, Church Newsroom
          </p>
        </div>
      </div>
    </main>
  );
}
