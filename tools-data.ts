export type ToolCategory =
  | "conversion"
  | "editing"
  | "security"
  | "organizing"
  | "advanced";

export interface PDFTool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  isPremium?: boolean;
  slug: string;
}

export const CATEGORIES: { id: ToolCategory; label: string; icon: string }[] = [
  { id: "conversion", label: "Conversion", icon: "ArrowLeftRight" },
  { id: "editing", label: "Editing", icon: "Pencil" },
  { id: "security", label: "Security", icon: "Shield" },
  { id: "organizing", label: "Organizing", icon: "FolderOpen" },
  { id: "advanced", label: "Advanced", icon: "Sparkles" },
];

export const TOOLS: PDFTool[] = [
  // PDF Conversion Tools
  { id: "pdf-to-word", name: "PDF to Word", description: "Convert PDF documents to editable Word files", category: "conversion", icon: "FileText", slug: "pdf-to-word" },
  { id: "pdf-to-excel", name: "PDF to Excel", description: "Convert PDF tables and data to Excel spreadsheets", category: "conversion", icon: "Sheet", slug: "pdf-to-excel" },
  { id: "pdf-to-ppt", name: "PDF to PPT", description: "Convert PDF presentations to PowerPoint format", category: "conversion", icon: "Presentation", slug: "pdf-to-ppt" },
  { id: "pdf-to-jpg", name: "PDF to JPG", description: "Convert PDF pages to high-quality JPG images", category: "conversion", icon: "Image", slug: "pdf-to-jpg" },
  { id: "pdf-to-png", name: "PDF to PNG", description: "Convert PDF pages to PNG images with transparency", category: "conversion", icon: "Image", slug: "pdf-to-png" },
  { id: "word-to-pdf", name: "Word to PDF", description: "Convert Word documents to PDF format", category: "conversion", icon: "FileText", slug: "word-to-pdf" },
  { id: "excel-to-pdf", name: "Excel to PDF", description: "Convert Excel spreadsheets to PDF format", category: "conversion", icon: "Sheet", slug: "excel-to-pdf" },
  { id: "ppt-to-pdf", name: "PPT to PDF", description: "Convert PowerPoint presentations to PDF", category: "conversion", icon: "Presentation", slug: "ppt-to-pdf" },
  { id: "jpg-to-pdf", name: "JPG to PDF", description: "Convert JPG images to PDF documents", category: "conversion", icon: "Image", slug: "jpg-to-pdf" },
  { id: "png-to-pdf", name: "PNG to PDF", description: "Convert PNG images to PDF documents", category: "conversion", icon: "Image", slug: "png-to-pdf" },
  { id: "html-to-pdf", name: "HTML to PDF", description: "Convert web pages and HTML files to PDF", category: "conversion", icon: "Code", slug: "html-to-pdf" },
  { id: "pdf-to-html", name: "PDF to HTML", description: "Convert PDF documents to web-ready HTML", category: "conversion", icon: "Code", slug: "pdf-to-html" },
  { id: "epub-to-pdf", name: "EPUB to PDF", description: "Convert EPUB e-books to PDF format", category: "conversion", icon: "BookOpen", slug: "epub-to-pdf" },
  { id: "pdf-to-epub", name: "PDF to EPUB", description: "Convert PDF documents to EPUB e-book format", category: "conversion", icon: "BookOpen", slug: "pdf-to-epub" },
  { id: "txt-to-pdf", name: "TXT to PDF", description: "Convert plain text files to PDF documents", category: "conversion", icon: "FileText", slug: "txt-to-pdf" },

  // PDF Editing Tools
  { id: "edit-pdf", name: "Edit PDF", description: "Edit text, images, and content in PDF files", category: "editing", icon: "Pencil", slug: "edit-pdf" },
  { id: "add-text", name: "Add Text to PDF", description: "Insert text anywhere in your PDF document", category: "editing", icon: "Type", slug: "add-text" },
  { id: "add-image", name: "Add Image to PDF", description: "Insert images into your PDF pages", category: "editing", icon: "ImagePlus", slug: "add-image" },
  { id: "add-watermark", name: "Add Watermark", description: "Add text or image watermarks to your PDF", category: "editing", icon: "Droplets", slug: "add-watermark" },
  { id: "remove-watermark", name: "Remove Watermark", description: "Remove existing watermarks from PDF files", category: "editing", icon: "Eraser", slug: "remove-watermark", isPremium: true },
  { id: "add-page-numbers", name: "Add Page Numbers", description: "Add page numbers to your PDF document", category: "editing", icon: "Hash", slug: "add-page-numbers" },
  { id: "rotate-pdf", name: "Rotate PDF", description: "Rotate PDF pages in any direction", category: "editing", icon: "RotateCw", slug: "rotate-pdf" },
  { id: "crop-pdf", name: "Crop PDF", description: "Crop PDF pages to remove unwanted margins", category: "editing", icon: "Crop", slug: "crop-pdf" },
  { id: "resize-pdf", name: "Resize PDF", description: "Change the page size of your PDF document", category: "editing", icon: "Maximize", slug: "resize-pdf" },
  { id: "compress-pdf", name: "Compress PDF", description: "Reduce PDF file size with low, medium, or high compression", category: "editing", icon: "Minimize2", slug: "compress-pdf" },
  { id: "redact-pdf", name: "Redact PDF", description: "Permanently remove sensitive information from PDFs", category: "editing", icon: "EyeOff", slug: "redact-pdf", isPremium: true },
  { id: "highlight-text", name: "Highlight Text", description: "Highlight important text in your PDF document", category: "editing", icon: "Highlighter", slug: "highlight-text" },
  { id: "annotate-pdf", name: "Annotate PDF", description: "Add annotations and comments to your PDF", category: "editing", icon: "MessageSquare", slug: "annotate-pdf" },

  // PDF Security Tools
  { id: "lock-pdf", name: "Lock PDF", description: "Lock your PDF to prevent unauthorized access", category: "security", icon: "Lock", slug: "lock-pdf" },
  { id: "unlock-pdf", name: "Unlock PDF", description: "Remove restrictions from locked PDF files", category: "security", icon: "Unlock", slug: "unlock-pdf" },
  { id: "add-password", name: "Add Password", description: "Protect your PDF with a strong password", category: "security", icon: "KeyRound", slug: "add-password" },
  { id: "remove-password", name: "Remove Password", description: "Remove password protection from PDF files", category: "security", icon: "KeyRound", slug: "remove-password" },
  { id: "encrypt-pdf", name: "Encrypt PDF", description: "Encrypt your PDF with advanced encryption", category: "security", icon: "ShieldCheck", slug: "encrypt-pdf", isPremium: true },
  { id: "decrypt-pdf", name: "Decrypt PDF", description: "Decrypt encrypted PDF files securely", category: "security", icon: "ShieldOff", slug: "decrypt-pdf", isPremium: true },
  { id: "add-signature", name: "Add Digital Signature", description: "Add a digital signature to your PDF document", category: "security", icon: "PenTool", slug: "add-signature" },
  { id: "verify-signature", name: "Verify Signature", description: "Verify digital signatures in PDF documents", category: "security", icon: "BadgeCheck", slug: "verify-signature" },
  { id: "protect-copy", name: "Protect from Copying", description: "Prevent others from copying content from your PDF", category: "security", icon: "ShieldAlert", slug: "protect-copy" },

  // PDF Organizing Tools
  { id: "merge-pdf", name: "Merge PDF", description: "Combine multiple PDF files into one document", category: "organizing", icon: "Combine", slug: "merge-pdf" },
  { id: "split-pdf", name: "Split PDF", description: "Split a PDF into multiple separate documents", category: "organizing", icon: "Scissors", slug: "split-pdf" },
  { id: "extract-pages", name: "Extract Pages", description: "Extract specific pages from your PDF document", category: "organizing", icon: "FileOutput", slug: "extract-pages" },
  { id: "delete-pages", name: "Delete Pages", description: "Remove unwanted pages from your PDF", category: "organizing", icon: "Trash2", slug: "delete-pages" },
  { id: "rearrange-pages", name: "Rearrange Pages", description: "Reorder pages in your PDF by dragging", category: "organizing", icon: "ArrowUpDown", slug: "rearrange-pages" },
  { id: "combine-pdfs", name: "Combine PDFs", description: "Join multiple PDFs with advanced ordering options", category: "organizing", icon: "Layers", slug: "combine-pdfs" },
  { id: "compare-pdfs", name: "Compare PDFs", description: "Compare two PDF files side by side", category: "organizing", icon: "Diff", slug: "compare-pdfs", isPremium: true },
  { id: "repair-pdf", name: "Repair PDF", description: "Fix corrupted or damaged PDF files", category: "organizing", icon: "Wrench", slug: "repair-pdf" },
  { id: "flatten-pdf", name: "Flatten PDF", description: "Flatten form fields and annotations in PDF", category: "organizing", icon: "Layers", slug: "flatten-pdf" },

  // Advanced Tools
  { id: "ocr-pdf", name: "OCR PDF", description: "Extract text from scanned PDFs using OCR technology", category: "advanced", icon: "ScanText", slug: "ocr-pdf", isPremium: true },
  { id: "scanned-to-text", name: "Scanned PDF to Text", description: "Convert scanned PDF documents to editable text", category: "advanced", icon: "ScanLine", slug: "scanned-to-text", isPremium: true },
  { id: "batch-convert", name: "Batch PDF Converter", description: "Convert multiple PDF files at once in batch", category: "advanced", icon: "Files", slug: "batch-convert", isPremium: true },
  { id: "metadata-editor", name: "PDF Metadata Editor", description: "Edit PDF metadata like title, author, and dates", category: "advanced", icon: "FileEdit", slug: "metadata-editor" },
  { id: "pdf-to-zip", name: "PDF to ZIP", description: "Compress PDF files into ZIP archives", category: "advanced", icon: "FolderArchive", slug: "pdf-to-zip" },
  { id: "zip-to-pdf", name: "ZIP to PDF", description: "Extract and convert files from ZIP to PDF", category: "advanced", icon: "FolderArchive", slug: "zip-to-pdf" },
  { id: "add-header-footer", name: "Add Header/Footer", description: "Add headers and footers to your PDF pages", category: "advanced", icon: "PanelTop", slug: "add-header-footer" },
  { id: "remove-blank-pages", name: "Remove Blank Pages", description: "Automatically detect and remove blank pages", category: "advanced", icon: "FileX", slug: "remove-blank-pages" },
  { id: "pdf-to-json", name: "PDF to JSON", description: "Extract structured data from PDF as JSON format", category: "advanced", icon: "Braces", slug: "pdf-to-json", isPremium: true },
  { id: "json-to-pdf", name: "JSON to PDF", description: "Generate PDF documents from JSON data", category: "advanced", icon: "Braces", slug: "json-to-pdf", isPremium: true },
];

export function getToolBySlug(slug: string): PDFTool | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): PDFTool[] {
  return TOOLS.filter((tool) => tool.category === category);
}

export function searchTools(query: string): PDFTool[] {
  const lower = query.toLowerCase();
  return TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lower) ||
      tool.description.toLowerCase().includes(lower)
  );
}
