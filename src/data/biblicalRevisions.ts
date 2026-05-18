export type RevisionCategory =
  | "Manuscript Tradition"
  | "Canon Decision"
  | "Translation"
  | "Critical Text"
  | "Disputed Passage"
  | "Modern Translation"
  | "Restoration";

export interface BiblicalRevision {
  id: number;
  name: string;
  /** Human-readable date string, e.g. "c. 250 BC", "AD 382", "1611" */
  date: string;
  /** Numeric year used for sorting; BC years are negative. */
  sortYear: number;
  category: RevisionCategory;
  /** 1–3 sentence neutral description of what the event was. */
  description: string;
  /** Why it happened: theological, political, philological, missional, etc. */
  reason: string;
  /** What changed in how Christians read or believed scripture. */
  doctrinalImpact: string;
  /** Specific Bible passages affected, when applicable. */
  passagesAffected?: string[];
  /** Reputable sources for further reading. */
  sources: { label: string; url: string }[];
}

/**
 * A catalog of the most consequential textual, canonical, and translational
 * revisions in the history of the Bible, compiled for a general LDS audience.
 *
 * The tone is intentionally neutral: where scholars disagree (e.g. the
 * Comma Johanneum, the Long Ending of Mark, KJV-only debates) the entry
 * notes the disagreement rather than picking a side.
 */
export const biblicalRevisions: BiblicalRevision[] = [
  {
    id: 1,
    name: "Samaritan Pentateuch",
    date: "c. 5th–2nd century BC",
    sortYear: -450,
    category: "Manuscript Tradition",
    description:
      "An independent Hebrew text of the Five Books of Moses preserved by the Samaritan community. It differs from the later Masoretic Text in roughly 6,000 places, most minor but some theologically significant.",
    reason:
      "Religious separation between Samaritans and Jews after the exile produced a parallel textual tradition tied to worship on Mount Gerizim rather than Jerusalem.",
    doctrinalImpact:
      "Demonstrates that more than one Hebrew Torah text-form circulated in antiquity. Its readings sometimes agree with the Septuagint and Dead Sea Scrolls against the Masoretic Text, complicating the idea of a single 'original' Old Testament wording.",
    passagesAffected: [
      "Exodus 20 (Tenth Commandment about Mount Gerizim)",
      "Deuteronomy 27:4 (Mount Gerizim vs. Mount Ebal)",
      "Genesis 5 and 11 (patriarchal chronologies)",
    ],
    sources: [
      {
        label: "Wikipedia: Samaritan Pentateuch",
        url: "https://en.wikipedia.org/wiki/Samaritan_Pentateuch",
      },
      {
        label: "Bible Odyssey: The Samaritan Pentateuch",
        url: "https://www.bibleodyssey.org/articles/the-samaritan-pentateuch/",
      },
    ],
  },
  {
    id: 2,
    name: "Septuagint (LXX)",
    date: "c. 250–100 BC",
    sortYear: -250,
    category: "Translation",
    description:
      "The Greek translation of the Hebrew scriptures, traditionally begun in Alexandria under Ptolemy II. The Torah was rendered first (c. 280–250 BC) and the remaining books over the next two centuries.",
    reason:
      "Most diaspora Jews in the Hellenistic world read and spoke Greek rather than Hebrew. The translation made scripture accessible and also served the Ptolemaic library project.",
    doctrinalImpact:
      "Became the default Bible of the early Christian church; most New Testament Old Testament quotations follow the LXX rather than the Hebrew. Differences from the Masoretic Text (most famously Isaiah 7:14's parthenos, 'virgin') shaped doctrines such as the virgin birth.",
    passagesAffected: [
      "Isaiah 7:14 ('virgin' vs. 'young woman')",
      "Psalms numbering",
      "Additions to Daniel and Esther",
    ],
    sources: [
      {
        label: "Wikipedia: Septuagint",
        url: "https://en.wikipedia.org/wiki/Septuagint",
      },
      {
        label: "Associates for Biblical Research: A Brief History of the Septuagint",
        url: "https://biblearchaeology.org/research/new-testament-era/4022-a-brief-history-of-the-septuagint",
      },
    ],
  },
  {
    id: 3,
    name: "Dead Sea Scrolls (Qumran library)",
    date: "c. 250 BC – AD 70 (discovered 1947–1956)",
    sortYear: -200,
    category: "Manuscript Tradition",
    description:
      "A collection of roughly 900 Jewish manuscripts discovered in caves near Qumran, including the earliest known copies of every Old Testament book except Esther. They predate previous Hebrew witnesses by about a thousand years.",
    reason:
      "Hidden, likely by the Qumran community, before the Roman destruction of AD 68–70. Their accidental rediscovery by Bedouin shepherds in 1947 transformed Old Testament textual criticism.",
    doctrinalImpact:
      "Confirmed the remarkable stability of the Hebrew Bible over a millennium while also revealing genuine textual diversity in the Second Temple period. Influenced modern translations (e.g. RSV, NRSV, ESV) to adopt some non-Masoretic readings, and provided new context for early Christianity and LDS questions about ancient apocalyptic Judaism.",
    passagesAffected: [
      "Great Isaiah Scroll (1QIsaᵃ)",
      "1 Samuel 11 (Nahash passage restored in NRSV)",
      "Deuteronomy 32:8 ('sons of God' vs. 'sons of Israel')",
    ],
    sources: [
      {
        label: "Wikipedia: Dead Sea Scrolls",
        url: "https://en.wikipedia.org/wiki/Dead_Sea_Scrolls",
      },
      {
        label: "Text & Canon: Appreciating the Diverse Evidence from the Dead Sea Scrolls",
        url: "https://textandcanon.org/appreciating-the-diverse-evidence-from-the-dead-sea-scrolls/",
      },
    ],
  },
  {
    id: 4,
    name: "Council of Jamnia (Yavneh) and the Hebrew Canon",
    date: "c. AD 90",
    sortYear: 90,
    category: "Canon Decision",
    description:
      "A rabbinic gathering at Yavneh traditionally credited with finalizing the 24-book Hebrew canon (Tanakh) after the destruction of the Second Temple. Modern scholars debate how decisive this 'council' actually was.",
    reason:
      "With the Temple destroyed in AD 70, Jewish identity reorganized around scripture and study. Disputes over books such as Ecclesiastes, Song of Songs, and Esther needed resolution.",
    doctrinalImpact:
      "Established the boundaries of the Hebrew Bible used by Jews and (later) Protestants, excluding the Greek deuterocanonical books that Christians inherited from the Septuagint. The contrast with the Christian Old Testament sets the stage for every later Apocrypha debate.",
    sources: [
      {
        label: "Wikipedia: Development of the Hebrew Bible canon",
        url: "https://en.wikipedia.org/wiki/Development_of_the_Hebrew_Bible_canon",
      },
      {
        label: "Blue Letter Bible: Was the Hebrew Canon Determined after the Time of Christ?",
        url: "https://www.blueletterbible.org/Comm/stewart_don/faq/right-books-in-old-testament/question16-was-hebrew-canon-after-christ.cfm",
      },
    ],
  },
  {
    id: 5,
    name: "Marcion's Canon",
    date: "c. AD 140",
    sortYear: 140,
    category: "Canon Decision",
    description:
      "Marcion of Sinope produced perhaps the first explicit Christian canon: an edited Gospel of Luke plus ten Pauline epistles. He rejected the entire Old Testament and any text he viewed as too Jewish.",
    reason:
      "Marcion taught that the God of the Hebrew scriptures was a lesser, vengeful deity distinct from the merciful Father of Jesus, requiring a purified Christian library.",
    doctrinalImpact:
      "Provoked the broader church to articulate which books were authoritative, accelerating the formation of a 'New Testament' that retained the four Gospels, the full Pauline corpus, the Old Testament, and the General Epistles in response.",
    sources: [
      {
        label: "Wikipedia: Marcionism",
        url: "https://en.wikipedia.org/wiki/Marcionism",
      },
      {
        label: "Bart Ehrman: Marcion and Marcionism",
        url: "https://www.bartehrman.com/marcion/",
      },
    ],
  },
  {
    id: 6,
    name: "Muratorian Fragment",
    date: "c. AD 170–200",
    sortYear: 180,
    category: "Canon Decision",
    description:
      "An 85-line Latin list (preserved in an 8th-century codex) of New Testament books accepted in the Roman church. It names 22 of the eventual 27 books, including the four Gospels, Acts, the Pauline letters, and Revelation.",
    reason:
      "Local churches needed working lists of which writings could be read in worship; this fragment likely answers questions about disputed books such as the Shepherd of Hermas.",
    doctrinalImpact:
      "Earliest known canonical list of New Testament writings; shows that the core New Testament was substantially settled in the second century, well before any ecumenical council.",
    sources: [
      {
        label: "Britannica: Muratorian Fragment",
        url: "https://www.britannica.com/topic/Muratorian-Fragment",
      },
      {
        label: "Bible Researcher: The Muratorian Fragment",
        url: "https://www.bible-researcher.com/muratorian.html",
      },
    ],
  },
  {
    id: 7,
    name: "Great Codices (Sinaiticus, Vaticanus, Alexandrinus)",
    date: "c. AD 330–450",
    sortYear: 350,
    category: "Manuscript Tradition",
    description:
      "Three of the earliest near-complete Greek Bibles. Codex Vaticanus and Sinaiticus (4th century) and Alexandrinus (5th century) are the foundational witnesses to the Alexandrian text-type.",
    reason:
      "After Christianity's legalization under Constantine, wealthy patrons could commission durable vellum codices containing the whole Bible — a major technological and ecclesiastical shift from individual scrolls.",
    doctrinalImpact:
      "These codices undergird almost every modern critical edition. Their omission of passages such as Mark 16:9–20 and the Pericope Adulterae drove later editors to bracket or footnote those texts.",
    passagesAffected: [
      "Mark 16:9–20",
      "John 7:53–8:11",
      "1 John 5:7–8 (absent)",
    ],
    sources: [
      {
        label: "Wikipedia: Codex Sinaiticus",
        url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus",
      },
      {
        label: "Wikipedia: Codex Vaticanus",
        url: "https://en.wikipedia.org/wiki/Codex_Vaticanus",
      },
    ],
  },
  {
    id: 8,
    name: "Athanasius' Easter Letter",
    date: "AD 367",
    sortYear: 367,
    category: "Canon Decision",
    description:
      "In his 39th Festal Letter, Athanasius of Alexandria listed precisely the 27 New Testament books still recognized today, calling them 'canonized.' It is the earliest unambiguous enumeration of the modern New Testament.",
    reason:
      "Egyptian churches needed clarity about which books could be read liturgically during Easter, especially to distinguish scripture from popular but disputed works such as the Shepherd of Hermas and the Didache.",
    doctrinalImpact:
      "Provided a single influential authority whose list shaped subsequent regional councils. From this point the contours of the New Testament were essentially fixed in Greek-speaking Christianity.",
    sources: [
      {
        label: "Wikipedia: Development of the New Testament canon",
        url: "https://en.wikipedia.org/wiki/Development_of_the_New_Testament_canon",
      },
      {
        label: "Grace Communion: Athanasius Lists the New Testament Writings",
        url: "https://www.gci.org/articles/athanasius-lists-the-new-testament-writings/",
      },
    ],
  },
  {
    id: 9,
    name: "Jerome's Latin Vulgate",
    date: "AD 382–405",
    sortYear: 382,
    category: "Translation",
    description:
      "Commissioned by Pope Damasus I in 382, Jerome revised the Old Latin Gospels and then translated the Old Testament directly from Hebrew ('Hebraica veritas'), completing the work around 405.",
    reason:
      "Latin manuscripts of the Bible had multiplied into chaotic variant readings; Jerome aimed to produce a single reliable Latin text grounded in the original languages rather than the Septuagint.",
    doctrinalImpact:
      "Became the official Bible of Western Christianity for over a thousand years, fixing Latin theological vocabulary (sacramentum, justificare, gratia). Jerome's preference for the Hebrew canon also seeded the Protestant–Catholic Apocrypha debate.",
    sources: [
      {
        label: "Wikipedia: Vulgate",
        url: "https://en.wikipedia.org/wiki/Vulgate",
      },
      {
        label: "Britannica: Vulgate",
        url: "https://www.britannica.com/topic/Vulgate",
      },
    ],
  },
  {
    id: 10,
    name: "Councils of Hippo & Carthage",
    date: "AD 393, 397, 419",
    sortYear: 397,
    category: "Canon Decision",
    description:
      "African church councils, with Augustine prominent at Hippo, ratified a 27-book New Testament and a broader Old Testament that included the deuterocanonical books inherited from the Septuagint.",
    reason:
      "Local councils sought to standardize liturgical reading and resolve lingering disputes over books like Hebrews, Revelation, and the Catholic Epistles.",
    doctrinalImpact:
      "Cemented the Latin/Western Old Testament with the deuterocanonicals included — the canon later reaffirmed at Florence (1442) and Trent (1546), and the very issue Protestants would re-litigate in the Reformation.",
    sources: [
      {
        label: "Bible Researcher: The Third Council of Carthage on the Canon of Scripture",
        url: "https://www.bible-researcher.com/carthage.html",
      },
      {
        label: "Lifeway: Establishing the New Testament Canon",
        url: "https://www.lifeway.com/en/articles/bible-study-establishing-new-testament-canon",
      },
    ],
  },
  {
    id: 11,
    name: "Masoretic Text Standardization",
    date: "c. AD 600–1000",
    sortYear: 800,
    category: "Manuscript Tradition",
    description:
      "Jewish scribes called the Masoretes, working primarily in Tiberias and Babylonia, added vowel points, accent marks, and meticulous marginal notes to the consonantal Hebrew text. The Aleppo Codex (c. 930) and Leningrad Codex (1008) are the great surviving witnesses.",
    reason:
      "To preserve the precise pronunciation and reading tradition of Hebrew scripture at a time when Hebrew was no longer a daily language and copying errors needed safeguards.",
    doctrinalImpact:
      "The Masoretic Text became the standard base for the Old Testament in Jewish, Protestant, and (with deuterocanonicals added) most modern Catholic translations. Its remarkable consistency was confirmed by the Dead Sea Scrolls.",
    sources: [
      {
        label: "Britannica: Masoretic text",
        url: "https://www.britannica.com/topic/Masoretic-text",
      },
      {
        label: "Wikipedia: Masoretic Text",
        url: "https://en.wikipedia.org/wiki/Masoretic_Text",
      },
    ],
  },
  {
    id: 12,
    name: "Wycliffe Bible",
    date: "1382–1395",
    sortYear: 1382,
    category: "Translation",
    description:
      "The first complete English Bible, translated from the Latin Vulgate under the influence of Oxford theologian John Wycliffe. An 'Early Version' (1382) was followed by John Purvey's more readable 'Later Version' (c. 1395).",
    reason:
      "Wycliffe believed common Christians should read scripture in their own tongue rather than depend on clerical mediation, an idea later echoed by the Lollard movement.",
    doctrinalImpact:
      "Made the Bible accessible in English for the first time in over a millennium and became a touchstone for later Reformers. Church authorities banned the work and posthumously condemned Wycliffe at the Council of Constance (1415).",
    sources: [
      {
        label: "Wikipedia: Wycliffe's Bible",
        url: "https://en.wikipedia.org/wiki/Wycliffe%27s_Bible",
      },
      {
        label: "Bible Manuscript Society: John Wycliffe's 1382 Bible translation",
        url: "https://biblemanuscriptsociety.com/Bible-resources/English-Bible-History/Wycliffe-Bible",
      },
    ],
  },
  {
    id: 13,
    name: "Erasmus' Greek New Testament & the Textus Receptus",
    date: "1516 (1st ed.); 1633 (TR label)",
    sortYear: 1516,
    category: "Critical Text",
    description:
      "Desiderius Erasmus produced the first published Greek New Testament in 1516, working under deadline pressure from five or six late Byzantine minuscules. Successive editions (1519, 1522, 1527, 1535) and the work of Stephanus, Beza, and the Elzevirs gave rise to what was advertised in 1633 as the 'Textus Receptus' — the received text.",
    reason:
      "The new printing press, Renaissance humanism's 'ad fontes' impulse, and a desire to challenge or correct the Vulgate created demand for a printed Greek New Testament.",
    doctrinalImpact:
      "Became the source text for Luther's German Bible, Tyndale's English Bible, the Geneva Bible, and the KJV. Erasmus' last-minute inclusion of the Comma Johanneum (1522) and reliance on late manuscripts fixed certain disputed readings in Protestant Bibles for centuries.",
    passagesAffected: [
      "1 John 5:7–8 (Comma Johanneum, added in 3rd edition)",
      "Revelation 22:16–21 (Erasmus back-translated from the Vulgate where Greek was missing)",
    ],
    sources: [
      {
        label: "Wikipedia: Textus Receptus",
        url: "https://en.wikipedia.org/wiki/Textus_Receptus",
      },
      {
        label: "Text & Canon: Erasmus and the Search for the Original Text of the New Testament",
        url: "https://textandcanon.org/erasmus-and-the-search-for-the-original-text-of-the-new-testament/",
      },
    ],
  },
  {
    id: 14,
    name: "Luther Bible",
    date: "1522 (NT) / 1534 (complete)",
    sortYear: 1522,
    category: "Translation",
    description:
      "Martin Luther's German translation of the New Testament (1522, drafted at the Wartburg in eleven weeks) and the complete Bible with Apocrypha (1534), made from Erasmus' Greek and the Hebrew Bible with collaborators including Melanchthon.",
    reason:
      "Luther wanted ordinary German speakers to read scripture for themselves, undercutting clerical monopoly and supporting Reformation theology (sola scriptura).",
    doctrinalImpact:
      "Reshaped the German language, standardized Reformation doctrine, and modeled the practice of separating Apocrypha from canonical books — placing them between the Testaments as 'useful and good to read' but not equal to scripture.",
    passagesAffected: [
      "Romans 3:28 ('allein durch den Glauben' — 'by faith alone')",
    ],
    sources: [
      {
        label: "Wikipedia: Luther Bible",
        url: "https://en.wikipedia.org/wiki/Luther_Bible",
      },
      {
        label: "German History Docs: The Luther Bible (1534)",
        url: "https://germanhistorydocs.org/en/from-the-reformations-to-the-thirty-years-war-1500-1648/the-luther-bible-1534",
      },
    ],
  },
  {
    id: 15,
    name: "Tyndale New Testament",
    date: "1526 (NT); 1530–1534 (Pentateuch/revisions)",
    sortYear: 1526,
    category: "Translation",
    description:
      "William Tyndale's translation of the New Testament directly from Erasmus' Greek into English, printed at Worms in 1526 and smuggled into England. He went on to translate much of the Old Testament from Hebrew before his arrest.",
    reason:
      "Tyndale was committed to giving 'the boy that driveth the plough' access to scripture in English, against an English ecclesiastical ban on vernacular Bibles.",
    doctrinalImpact:
      "Provided perhaps 75–80% of the language later adopted by the KJV, shaping English biblical vocabulary ('passover,' 'scapegoat,' 'atonement,' 'mercy seat'). Tyndale was strangled and burned at the stake in 1536, becoming a Protestant martyr.",
    sources: [
      {
        label: "Britannica: William Tyndale",
        url: "https://www.britannica.com/biography/William-Tyndale",
      },
      {
        label: "Wikipedia: Tyndale Bible",
        url: "https://en.wikipedia.org/wiki/Tyndale_Bible",
      },
    ],
  },
  {
    id: 16,
    name: "Coverdale, Matthew, and Great Bibles",
    date: "1535 / 1537 / 1539",
    sortYear: 1535,
    category: "Translation",
    description:
      "Miles Coverdale's 1535 Bible was the first complete printed English Bible. The Matthew Bible (1537), edited by John Rogers, combined Tyndale's and Coverdale's work. The Great Bible (1539), edited by Coverdale, became the first English Bible officially authorized for use in churches.",
    reason:
      "Henry VIII's break with Rome created political space for an English Bible; reformers seized the moment to publish vernacular scriptures with royal sanction.",
    doctrinalImpact:
      "Made an English Bible publicly available in every parish church. Coverdale's lyrical Psalter survives in the Book of Common Prayer.",
    sources: [
      {
        label: "Wikipedia: Coverdale Bible",
        url: "https://en.wikipedia.org/wiki/Coverdale_Bible",
      },
      {
        label: "Britannica: The translation of Miles Coverdale",
        url: "https://www.britannica.com/topic/biblical-literature/The-translation-of-Miles-Coverdale",
      },
    ],
  },
  {
    id: 17,
    name: "Council of Trent — Canon of Scripture",
    date: "April 8, 1546",
    sortYear: 1546,
    category: "Canon Decision",
    description:
      "In its fourth session the Council of Trent dogmatically defined the Catholic canon, including the seven deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees) and additions to Daniel and Esther, and declared the Vulgate the authentic Latin Bible.",
    reason:
      "Counter-Reformation response to Luther and other reformers who had separated or removed the deuterocanonical books and challenged the authority of the Vulgate.",
    doctrinalImpact:
      "Made the Apocrypha question a formal dividing line between Catholics and Protestants. Doctrines such as prayer for the dead (drawn from 2 Maccabees 12) became enshrined as scriptural for Catholics but not Protestants.",
    passagesAffected: [
      "2 Maccabees 12:39–45",
      "Tobit 12:8–9",
      "Wisdom 3",
    ],
    sources: [
      {
        label: "Wikipedia: Canon of Trent",
        url: "https://en.wikipedia.org/wiki/Canon_of_Trent",
      },
      {
        label: "EWTN: Decree Concerning the Canonical Scriptures",
        url: "https://www.ewtn.com/catholicism/library/decree-concerning-the-canonical-scriptures-1494",
      },
    ],
  },
  {
    id: 18,
    name: "Geneva Bible",
    date: "1560",
    sortYear: 1560,
    category: "Translation",
    description:
      "Produced by English Protestant exiles in Calvin's Geneva, this was the first English Bible translated entirely from Hebrew and Greek, the first with numbered verses, and the first English study Bible with extensive marginal notes.",
    reason:
      "Marian persecution drove English Protestant scholars to Geneva, where they pooled humanist learning and Reformed theology to create a portable, annotated Bible for laypeople.",
    doctrinalImpact:
      "Became the Bible of Shakespeare, the Puritans, John Knox, and the Pilgrim Fathers (carried on the Mayflower in 1620). Its strongly Calvinist marginal notes annoyed the English crown, motivating the eventual KJV project.",
    sources: [
      {
        label: "Wikipedia: Geneva Bible",
        url: "https://en.wikipedia.org/wiki/Geneva_Bible",
      },
      {
        label: "Houston Christian University: The Geneva Bible — The First English Study Bible",
        url: "https://hc.edu/museums/dunham-bible-museum/tour-of-the-museum/past-exhibits/from-geneva-the-first-english-study-bible/",
      },
    ],
  },
  {
    id: 19,
    name: "Bishops' Bible",
    date: "1568 (rev. 1572)",
    sortYear: 1568,
    category: "Translation",
    description:
      "Revision of the Great Bible authorized by the Church of England under Archbishop Matthew Parker, intended as the pulpit Bible of England. The 1602 edition served as the base text for KJV translators.",
    reason:
      "Elizabethan bishops needed an officially sanctioned English Bible to displace the popular but Calvinist Geneva Bible in church reading.",
    doctrinalImpact:
      "Never widely loved in households, but provided the literary substrate and base text from which the KJV translators worked, instructing them to alter it only when necessary.",
    sources: [
      {
        label: "Wikipedia: Bishops' Bible",
        url: "https://en.wikipedia.org/wiki/Bishops%27_Bible",
      },
      {
        label: "GotQuestions: What is The Bishops' Bible?",
        url: "https://www.gotquestions.org/Bishops-Bible.html",
      },
    ],
  },
  {
    id: 20,
    name: "King James Version (Authorized Version)",
    date: "1611",
    sortYear: 1611,
    category: "Translation",
    description:
      "Commissioned by King James I in 1604 at the Hampton Court Conference, produced by 47 translators in six companies working from the Hebrew, Greek (Textus Receptus), and the Bishops' Bible, and first published in 1611 with the Apocrypha between the testaments.",
    reason:
      "James sought a unifying English Bible without the Geneva Bible's anti-monarchical marginal notes; the project also served Stuart political stability and Anglican identity.",
    doctrinalImpact:
      "Became the dominant English Bible for over three centuries, shaping English literature, worship, and theology. For Latter-day Saints it is the foundational English scripture text and the Bible Joseph Smith used.",
    sources: [
      {
        label: "Wikipedia: King James Version",
        url: "https://en.wikipedia.org/wiki/King_James_Version",
      },
      {
        label: "The KJV Store: A Complete History of the King James Bible",
        url: "https://www.thekjvstore.com/articles/a-complete-history-of-the-king-james-bible/",
      },
    ],
  },
  {
    id: 21,
    name: "KJV Standardization (Cambridge 1629/1638; Blayney 1769)",
    date: "1629 / 1638 / 1769",
    sortYear: 1769,
    category: "Translation",
    description:
      "Cambridge editions of 1629 and 1638 corrected printers' errors. Benjamin Blayney's 1769 Oxford edition standardized spelling, punctuation, italics, and proper names, producing the form of the KJV used in nearly every modern printing — differing from 1611 in roughly 24,000 mostly minor places.",
    reason:
      "Original 17th-century KJV printings varied widely due to printer mistakes and evolving English orthography; readers and publishers needed a uniform standard text.",
    doctrinalImpact:
      "What most people today call 'the King James Bible' is in fact the 1769 revision, not the 1611 original. The LDS edition of the KJV is also based on the Blayney text.",
    sources: [
      {
        label: "Bible Researcher: Changes in the King James version",
        url: "https://www.bible-researcher.com/canon10.html",
      },
      {
        label: "Eden: Difference Between the 1611 and 1769 KJV",
        url: "https://www.eden.co.uk/blog/what-is-the-difference-between-the-1611-and-1769-kjv-versions--eden-p1805793",
      },
    ],
  },
  {
    id: 22,
    name: "Joseph Smith Translation (JST / Inspired Version)",
    date: "1830–1833 (published 1867)",
    sortYear: 1830,
    category: "Restoration",
    description:
      "Joseph Smith's prayerful revision of the King James Bible, undertaken with Sidney Rigdon and other scribes between June 1830 and July 1833. He worked from an English KJV, not Hebrew or Greek, and described the project as restoring 'plain and precious' things lost or altered over time.",
    reason:
      "Smith taught that the Bible had been transmitted imperfectly, and that revelation could restore lost truths — particularly about the premortal Christ, the priesthood, the Plan of Salvation, and ancient prophets such as Moses, Enoch, and Melchizedek.",
    doctrinalImpact:
      "Produced substantial additions including the Book of Moses (JST Genesis 1–7) and Joseph Smith–Matthew (JST Matthew 24), both canonized in the Pearl of Great Price. The LDS Church publishes selected JST excerpts in footnotes and an appendix of its KJV, while accepting only portions as canon.",
    passagesAffected: [
      "Genesis 1–7 (Book of Moses)",
      "Genesis 14 (16 added verses on Melchizedek)",
      "Genesis 50 (prophecy of Joseph regarding latter-day prophets)",
      "Matthew 24 (JS–Matthew)",
      "John 1:1–18 (Christ as Word and Light)",
      "Romans 4–7 (changes on grace, works, and faith)",
    ],
    sources: [
      {
        label: "Church of Jesus Christ: Joseph Smith Translation of the Bible",
        url: "https://www.churchofjesuschrist.org/study/history/topics/joseph-smith-translation-of-the-bible?lang=eng",
      },
      {
        label: "BYU Studies: The Joseph Smith Translation of the Bible",
        url: "https://byustudies.byu.edu/article/the-joseph-smith-translation-of-the-bible",
      },
    ],
  },
  {
    id: 23,
    name: "Book of Mormon Biblical Quotations",
    date: "1830",
    sortYear: 1830,
    category: "Restoration",
    description:
      "When the Book of Mormon was published in 1830, its long quotations from Isaiah, Malachi, and Jesus' Sermon on the Mount used the King James English as a base but varied from it in hundreds of small places, often by restoring or altering KJV italicized words.",
    reason:
      "Joseph Smith dictated the translation in English using the familiar cadence of the KJV. Latter-day Saints view many variants as restorations of an older Hebrew or Nephite text; critics view them as evidence of KJV dependence.",
    doctrinalImpact:
      "Established a Latter-day Saint hermeneutic that ancient prophets understood Christ explicitly and that biblical books such as Isaiah had been transmitted with losses. Smith later used the Book of Mormon's Isaiah readings to inform his Bible translation work.",
    passagesAffected: [
      "Isaiah 2–14 (2 Nephi 12–24)",
      "Isaiah 48–54 (1 Nephi 20–21; 2 Nephi 7–8; 3 Nephi 16, 20, 22)",
      "Matthew 5–7 (3 Nephi 12–14)",
      "Malachi 3–4 (3 Nephi 24–25)",
    ],
    sources: [
      {
        label: "BYU RSC: Isaiah Variants in the Book of Mormon",
        url: "https://rsc.byu.edu/isaiah-prophets/isaiah-variants-book-mormon",
      },
      {
        label: "Interpreter: Missing Words — KJV Italics in the Book of Mormon",
        url: "https://interpreterfoundation.org/journal/missing-words-king-james-bible-italics-the-translation-of-the-book-of-mormon-and-joseph-smith-as-an-unlearned-reader",
      },
    ],
  },
  {
    id: 24,
    name: "Tischendorf and the Critical Manuscripts",
    date: "1844–1859",
    sortYear: 1859,
    category: "Critical Text",
    description:
      "German scholar Constantin von Tischendorf discovered and published Codex Sinaiticus at St. Catherine's Monastery on Mount Sinai (initial discovery 1844, fuller acquisition 1859), one of the two oldest near-complete Greek Bibles.",
    reason:
      "19th-century European scholarship and the rise of textual criticism prompted systematic searches for early manuscripts in monastic libraries.",
    doctrinalImpact:
      "Provided crucial evidence that famous KJV passages such as 1 John 5:7, John 7:53–8:11, and Mark 16:9–20 were absent from the oldest Greek witnesses. Forced theologians and translators to grapple with the gap between the Textus Receptus and the earliest manuscripts.",
    sources: [
      {
        label: "Wikipedia: Codex Sinaiticus",
        url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus",
      },
      {
        label: "Smithsonian: Codex Sinaiticus",
        url: "https://asia-archive.si.edu/exhibition/codex-sinaiticus/",
      },
    ],
  },
  {
    id: 25,
    name: "English Revised Version & American Standard Version",
    date: "1881 (NT) / 1885 (OT) / 1901 (ASV)",
    sortYear: 1881,
    category: "Modern Translation",
    description:
      "Begun in 1870 at the request of the Church of England, the Revised Version was the first major revision of the KJV. American scholars participated and later released their preferred form as the American Standard Version in 1901, using 'Jehovah' for the Tetragrammaton.",
    reason:
      "Three centuries of new manuscript discoveries (especially Sinaiticus and Vaticanus), advances in Hebrew and Greek scholarship, and changes in English usage made revision essential.",
    doctrinalImpact:
      "Introduced English readers to the Alexandrian text-type and to bracketed or footnoted versions of disputed passages. Set the pattern for nearly every later mainstream English translation.",
    passagesAffected: [
      "Mark 16:9–20 (bracketed/footnoted)",
      "John 7:53–8:11 (bracketed)",
      "1 John 5:7 (omitted)",
    ],
    sources: [
      {
        label: "Wikipedia: American Standard Version",
        url: "https://en.wikipedia.org/wiki/American_Standard_Version",
      },
      {
        label: "Bible Researcher: American Standard Version (1901)",
        url: "https://www.bible-researcher.com/asv.html",
      },
    ],
  },
  {
    id: 26,
    name: "Westcott & Hort Greek New Testament",
    date: "1881",
    sortYear: 1881,
    category: "Critical Text",
    description:
      "B. F. Westcott and F. J. A. Hort published 'The New Testament in the Original Greek,' the first thoroughly modern critical edition, departing from the Textus Receptus in roughly 5,600 places and giving primacy to Sinaiticus and Vaticanus.",
    reason:
      "Westcott and Hort developed a genealogical theory of manuscript families, judging the Byzantine text-type to be later and more harmonized than the Alexandrian witnesses.",
    doctrinalImpact:
      "Set the methodological foundation for the Nestle–Aland / UBS critical editions used in virtually every modern translation. Their work is praised by mainstream scholars and resisted by KJV-only advocates who prefer the Textus Receptus.",
    sources: [
      {
        label: "Wikipedia: Westcott and Hort",
        url: "https://en.wikipedia.org/wiki/Westcott_and_Hort",
      },
      {
        label: "UASV: Who Were Westcott and Hort?",
        url: "https://uasvbible.org/2025/07/30/who-were-westcott-and-hort-a-thorough-examination-of-their-role-in-new-testament-textual-criticism/",
      },
    ],
  },
  {
    id: 27,
    name: "Comma Johanneum (1 John 5:7)",
    date: "Latin: c. 800; Greek: c. 1500s",
    sortYear: 1522,
    category: "Disputed Passage",
    description:
      "The clause 'For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one' appears in 1 John 5:7 in the KJV but is absent from every Greek manuscript before the 14th century and from all early Latin manuscripts before the 9th.",
    reason:
      "Likely originated as a marginal Trinitarian gloss in Latin manuscripts. Erasmus omitted it from his 1516 and 1519 Greek editions; under pressure he added it in 1522 after a Greek manuscript containing it was produced (now considered a back-translation).",
    doctrinalImpact:
      "Provided the most explicit proof-text for the Trinity in any Bible verse — and its absence in modern critical editions has fueled both Trinitarian and anti-Trinitarian debate. The LDS KJV retains the verse but Latter-day Saint theology does not depend on it.",
    passagesAffected: ["1 John 5:7–8"],
    sources: [
      {
        label: "GotQuestions: What is the Comma Johanneum?",
        url: "https://www.gotquestions.org/Comma-Johanneum.html",
      },
      {
        label: "Restitutio: The Story Behind the Comma Johanneum",
        url: "https://restitutio.org/2015/12/08/the-story-behind-the-comma-johanneum-1-john-5-7/",
      },
    ],
  },
  {
    id: 28,
    name: "Pericope Adulterae (John 7:53–8:11)",
    date: "Disputed from antiquity",
    sortYear: 400,
    category: "Disputed Passage",
    description:
      "The story of Jesus and the woman caught in adultery is absent from the earliest Greek witnesses (P66, P75, Sinaiticus, Vaticanus). It appears in 5th-century Codex Bezae, in some manuscripts after Luke 21:38, and at varying locations in John.",
    reason:
      "Modern scholarship widely judges it a beloved oral tradition that floated between Gospels before being settled in John. Many also consider it historically authentic to Jesus even if not original to the Fourth Gospel.",
    doctrinalImpact:
      "Most translations now bracket or footnote it. The episode remains pastorally and theologically influential ('let him who is without sin cast the first stone'), and Latter-day Saints commonly cite it; the JST retains it without major change.",
    passagesAffected: ["John 7:53–8:11"],
    sources: [
      {
        label: "Logos: How to Preach Mark 16 & John 8",
        url: "https://www.logos.com/grow/min-preaching-john-8-mark-16/",
      },
      {
        label: "Mind Renewers: The Pericope Adulterae and the Oldest Manuscripts",
        url: "https://mindrenewers.com/2012/02/10/the-pericope-adulterae-and-the-oldest-manuscripts/",
      },
    ],
  },
  {
    id: 29,
    name: "Long Ending of Mark (Mark 16:9–20)",
    date: "Disputed from antiquity",
    sortYear: 400,
    category: "Disputed Passage",
    description:
      "The twelve verses describing post-resurrection appearances, the Great Commission, and signs (speaking in tongues, handling serpents) are absent from Codex Sinaiticus and Codex Vaticanus; Eusebius and Jerome both noted their absence from most Greek copies of their day.",
    reason:
      "Most scholars regard them as a 2nd-century addition supplying a fuller ending to a Gospel that otherwise ends abruptly at 16:8. A minority defends their originality based on later widespread attestation.",
    doctrinalImpact:
      "Modern translations typically bracket the passage. It is the source of several distinctive practices (snake-handling, baptismal regeneration debates) and is retained in the LDS KJV; Latter-day Saint doctrine on Christ's resurrection does not hinge on it.",
    passagesAffected: ["Mark 16:9–20"],
    sources: [
      {
        label: "Wikipedia: Mark 16",
        url: "https://en.wikipedia.org/wiki/Mark_16",
      },
      {
        label: "Biblical Archaeology Society: The 'Strange' Ending of the Gospel of Mark",
        url: "https://www.biblicalarchaeology.org/daily/biblical-topics/new-testament/the-strange-ending-of-the-gospel-of-mark-and-why-it-makes-all-the-difference/",
      },
    ],
  },
  {
    id: 30,
    name: "Doxology of the Lord's Prayer (Matthew 6:13)",
    date: "Earliest attestation: 1st–2nd century",
    sortYear: 100,
    category: "Disputed Passage",
    description:
      "The closing 'For thine is the kingdom, and the power, and the glory, for ever. Amen' is absent from the earliest Greek witnesses to Matthew (Sinaiticus, Vaticanus, Bezae) but appears in the Didache and in most Byzantine manuscripts.",
    reason:
      "Likely originated as an early liturgical conclusion drawn from 1 Chronicles 29:11 that was eventually copied into the biblical text. The Textus Receptus included it, so it entered the KJV.",
    doctrinalImpact:
      "Shapes Protestant liturgical practice (the doxology is sung or said with the prayer) while Catholic and modern critical Bibles typically omit it. Latter-day Saints recite it as part of the KJV Lord's Prayer.",
    passagesAffected: ["Matthew 6:13"],
    sources: [
      {
        label: "Judah Lamb: The Missing Words — Doxology of the Lord's Prayer",
        url: "https://judah-lamb.com/blogs/sacred-meditations/the-missing-words-understanding-the-doxology-of-the-lords-prayer",
      },
      {
        label: "KJV Today: Is the Doxology of the Lord's Prayer a Late Addition?",
        url: "https://www.kjvtoday.com/doxology-of-lords-prayer-in-matthew-613/",
      },
    ],
  },
  {
    id: 31,
    name: "Nestle–Aland / UBS Critical Editions",
    date: "1898–present (NA28 / UBS5)",
    sortYear: 1898,
    category: "Critical Text",
    description:
      "Eberhard Nestle's 1898 Greek New Testament fused the major 19th-century critical editions. Successive generations (Erwin Nestle, Kurt and Barbara Aland, with UBS partners Metzger, Black, Wikgren, Martini, Karavidopoulos) developed it into the standard scholarly text, currently in its 28th edition.",
    reason:
      "Continuous discovery of new papyri (P45, P46, P52, P66, P75, the Bodmer and Chester Beatty collections) plus refinements in textual method required a regularly updated 'eclectic' base text.",
    doctrinalImpact:
      "The NA/UBS text underlies virtually every modern Bible translation — NIV, ESV, NRSV, NET, NLT, NASB. Its apparatus makes textual variants accessible and has effectively replaced the Textus Receptus in mainstream scholarship.",
    sources: [
      {
        label: "Wikipedia: Novum Testamentum Graece",
        url: "https://en.wikipedia.org/wiki/Novum_Testamentum_Graece",
      },
      {
        label: "Nestle-Aland: History",
        url: "https://www.nestle-aland.com/en/history/",
      },
    ],
  },
  {
    id: 32,
    name: "Revised Standard Version",
    date: "1946 (NT) / 1952 (complete)",
    sortYear: 1952,
    category: "Modern Translation",
    description:
      "An update of the ASV by the National Council of Churches, drawing on Dead Sea Scrolls evidence and contemporary scholarship. Its 1952 publication ignited controversy, especially over rendering Hebrew 'almah' as 'young woman' in Isaiah 7:14.",
    reason:
      "To bring the ASV's English up to date and to incorporate a half-century of manuscript and lexical advances, including the freshly discovered Dead Sea Scrolls.",
    doctrinalImpact:
      "Sparked an enduring evangelical–mainline split over translation philosophy. Some critics burned RSV Bibles publicly; conservative responses included the NASB, NIV, and (later) the ESV. Catholic and Orthodox editions of the RSV are widely used.",
    passagesAffected: [
      "Isaiah 7:14 ('young woman' vs. 'virgin')",
      "Psalm 22:16 ('they have pierced my hands and my feet' footnoted)",
    ],
    sources: [
      {
        label: "Wikipedia: Revised Standard Version",
        url: "https://en.wikipedia.org/wiki/Revised_Standard_Version",
      },
      {
        label: "PostBarthian: Virgin or Young Woman in Isaiah 7:14",
        url: "https://postbarthian.com/2017/12/24/virgin-young-woman-isaiah-714-litmus-test-bible-translations/",
      },
    ],
  },
  {
    id: 33,
    name: "LDS Edition of the King James Bible",
    date: "1979 (rev. 2013)",
    sortYear: 1979,
    category: "Restoration",
    description:
      "The Church of Jesus Christ of Latter-day Saints published its own edition of the KJV in 1979 with chapter summaries, an extensive footnote and cross-reference apparatus, the Topical Guide, Bible Dictionary, maps, and a JST appendix. The 2013 edition updated study helps, footnotes, and historical introductions.",
    reason:
      "To present the Bible alongside the other LDS standard works (Book of Mormon, Doctrine and Covenants, Pearl of Great Price) as a unified study system rooted in Restoration theology.",
    doctrinalImpact:
      "Defined how a generation of Latter-day Saints encounters the Bible: KJV text with JST footnotes, Book of Mormon cross-references, and Restoration-era doctrinal commentary. The 2013 revision quietly corrected hundreds of footnote, heading, and historical errors.",
    sources: [
      {
        label: "Wikipedia: LDS edition of the Bible",
        url: "https://en.wikipedia.org/wiki/LDS_edition_of_the_Bible",
      },
      {
        label: "BYU RSC: Revisions in the 2013 LDS Edition of the King James Bible",
        url: "https://rsc.byu.edu/vol-15-no-1-2014/revisions-2013-lds-edition-king-james-bible",
      },
    ],
  },
  {
    id: 34,
    name: "New International Version",
    date: "1978 (rev. 1984, 2011)",
    sortYear: 1978,
    category: "Modern Translation",
    description:
      "Developed from 1965 by an interdenominational evangelical Committee on Bible Translation; published complete in 1978 by Biblica/Zondervan, with revisions in 1984 and a substantial 2011 update incorporating gender-inclusive choices from the TNIV.",
    reason:
      "Evangelicals wanted a contemporary, readable English translation outside the RSV's mainline-Protestant orbit, balancing formal accuracy with dynamic equivalence.",
    doctrinalImpact:
      "Became the best-selling modern English Bible, displacing the KJV in many evangelical pews. The 2011 gender-language update drew sharp criticism in some conservative circles and led some congregations to migrate to the ESV or NASB.",
    sources: [
      {
        label: "Wikipedia: New International Version",
        url: "https://en.wikipedia.org/wiki/New_International_Version",
      },
      {
        label: "Bible Researcher: A History and Evaluation of the NIV",
        url: "http://bible-researcher.com/niv.html",
      },
    ],
  },
  {
    id: 35,
    name: "New Revised Standard Version",
    date: "1989 (NRSVue 2021)",
    sortYear: 1989,
    category: "Modern Translation",
    description:
      "An update of the RSV by the National Council of Churches under Bruce Metzger, adopting gender-inclusive language for humanity (e.g., 'brothers and sisters' where the Greek refers to mixed groups) and incorporating new manuscript evidence.",
    reason:
      "To address shifts in English idiom, growing sensitivity to inclusive language, and three decades of scholarship since the RSV.",
    doctrinalImpact:
      "Became the standard translation for mainline Protestant, Catholic, and Orthodox academic use. Its gender choices set a benchmark that influenced (and provoked alternatives to) every later mainstream translation.",
    sources: [
      {
        label: "Wikipedia: New Revised Standard Version",
        url: "https://en.wikipedia.org/wiki/New_Revised_Standard_Version",
      },
      {
        label: "Baptist News: After 30 Years, the NRSV Gets an Update",
        url: "https://baptistnews.com/article/after-30-years-the-nrsv-gets-an-update-heres-what-that-means/",
      },
    ],
  },
  {
    id: 36,
    name: "NET Bible (New English Translation)",
    date: "1996–2005 (2nd ed. 2019)",
    sortYear: 2005,
    category: "Modern Translation",
    description:
      "Conceived in 1995 at the Society of Biblical Literature, the NET Bible was the first major modern translation distributed freely on the internet. Its hallmark is roughly 61,000 translator, textual, and study footnotes documenting the choices behind every difficult passage.",
    reason:
      "To make scholarly translation transparent — readers can see why translators chose a reading — and to provide a free, openly licensed Bible for the digital age.",
    doctrinalImpact:
      "Models radical transparency in Bible translation. The footnotes function as a built-in textual criticism course, helping readers understand variant readings, lexical ambiguity, and translation theory at a depth previously reserved for scholars.",
    sources: [
      {
        label: "Wikipedia: New English Translation",
        url: "https://en.wikipedia.org/wiki/New_English_Translation",
      },
      {
        label: "Bible.org: The Translation Philosophy of the NET Bible",
        url: "https://blogs.bible.org/the-translation-philosophy-of-the-net-bible/",
      },
    ],
  },
  {
    id: 37,
    name: "English Standard Version",
    date: "2001 (rev. 2007, 2011, 2016)",
    sortYear: 2001,
    category: "Modern Translation",
    description:
      "Crossway's revision of the 1971 RSV produced by an evangelical translation oversight committee. The ESV pursues 'essentially literal' (formal equivalence) translation and largely retains traditional renderings (e.g., 'virgin' in Isaiah 7:14).",
    reason:
      "Many evangelicals wanted an alternative to dynamic-equivalence translations like the NIV and the gender-inclusive NRSV while preserving the RSV's literary heritage.",
    doctrinalImpact:
      "Quickly became the preferred translation of much of the Reformed and confessional evangelical world. Its 2016 'Permanent Text' was retracted within weeks after publisher Crossway pledged not to revise it further, an unusual chapter in modern Bible publishing.",
    sources: [
      {
        label: "Wikipedia: English Standard Version",
        url: "https://en.wikipedia.org/wiki/English_Standard_Version",
      },
      {
        label: "Bible Reasons: NRSV vs ESV",
        url: "https://biblereasons.com/nrsv-vs-esv-bible/",
      },
    ],
  },
];

/**
 * Color palette for the seven categories. Chosen to read well in both
 * light and dark mode (mid-saturation hues, similar in spirit to the
 * synoptic page's gospelColors palette).
 */
export const categoryColors: Record<RevisionCategory, string> = {
  "Manuscript Tradition": "#0891b2", // cyan-600 — ancient parchment / antiquity
  "Canon Decision": "#7c3aed", // violet-600 — councils & authority
  Translation: "#2563eb", // blue-600 — vernacular accessibility
  "Critical Text": "#0d9488", // teal-600 — scholarship & rigor
  "Disputed Passage": "#dc2626", // red-600 — contested verses
  "Modern Translation": "#16a34a", // green-600 — contemporary growth
  Restoration: "#d97706", // amber-600 — Restoration of plain & precious truths
} as const;
