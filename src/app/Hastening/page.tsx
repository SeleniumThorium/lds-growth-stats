"use client";

import { useState } from "react";
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

export default function Home() {
  const [selectedMetric, setSelectedMetric] = useState<string>("totalMembership");

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

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors mb-3 inline-block"
          >
            &larr; Back to SeleniumThorium Development
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Church Growth Statistics
          </h1>
          <p className="mt-2 text-gray-600">
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
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {selectedCategory?.label} ({firstYear}–{lastYear})
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                ticks={xTicks}
                domain={[firstYear, lastYear]}
              />
              <YAxis tickFormatter={formatNumber} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [
                  value != null ? value.toLocaleString() : "N/A",
                  selectedCategory?.label,
                ]}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <Legend />
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
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <p className="text-sm text-gray-500">{category.label}</p>
                <p className="text-2xl font-bold mt-1" style={{ color: category.color }}>
                  {latestValue != null ? Number(latestValue).toLocaleString() : "—"}
                </p>
                <p className="text-xs text-gray-400 mt-1">As of 2024</p>
              </div>
            );
          })}
        </div>

        {/* Sources */}
        <div className="mt-8 text-xs text-gray-400">
          <p>
            Sources: 2013 Church Almanac, Official Church Statistical Reports,
            churchofjesuschristtemples.org, Church Newsroom
          </p>
        </div>
      </div>
    </main>
  );
}
