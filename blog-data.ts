export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-compress-pdf-files",
    title: "How to Compress PDF Files Without Losing Quality",
    excerpt: "Learn the best techniques to reduce your PDF file size while maintaining document quality. Our guide covers compression levels and when to use each.",
    date: "2026-02-20",
    author: "Sarah Chen",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    slug: "pdf-security-best-practices",
    title: "PDF Security Best Practices for Business Documents",
    excerpt: "Protect your sensitive business documents with these essential PDF security practices including encryption, passwords, and digital signatures.",
    date: "2026-02-18",
    author: "Marcus Johnson",
    category: "Security",
    readTime: "7 min read",
  },
  {
    slug: "merge-pdf-files-guide",
    title: "The Complete Guide to Merging PDF Files",
    excerpt: "Everything you need to know about combining multiple PDF files into one document, including ordering, optimization, and batch processing.",
    date: "2026-02-15",
    author: "Emily Rodriguez",
    category: "Guides",
    readTime: "4 min read",
  },
  {
    slug: "ocr-technology-explained",
    title: "OCR Technology: How It Works and Why You Need It",
    excerpt: "Discover how Optical Character Recognition turns scanned documents into editable text, and learn how to get the best results from OCR.",
    date: "2026-02-12",
    author: "David Park",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    slug: "pdf-vs-docx-comparison",
    title: "PDF vs DOCX: When to Use Each Format",
    excerpt: "A comprehensive comparison of PDF and DOCX formats. Learn when to use each format and how to convert between them efficiently.",
    date: "2026-02-10",
    author: "Sarah Chen",
    category: "Comparison",
    readTime: "5 min read",
  },
  {
    slug: "digital-signature-guide",
    title: "Adding Digital Signatures to PDFs: A Step-by-Step Guide",
    excerpt: "Learn how to add legally binding digital signatures to your PDF documents. Covers certificate-based signatures and e-signatures.",
    date: "2026-02-08",
    author: "Marcus Johnson",
    category: "Security",
    readTime: "8 min read",
  },
];
