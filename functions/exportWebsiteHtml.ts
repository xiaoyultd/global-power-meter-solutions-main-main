import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GY900E-AS4 - Multifunction Power Analyzer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; }
        .hero-gradient { background: linear-gradient(to bottom, #f0f9ff, #ffffff); }
    </style>
</head>
<body class="bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span class="text-white font-bold text-xl">X</span>
                    </div>
                    <div>
                        <div class="text-lg font-bold text-gray-900">Xiaoyu</div>
                        <div class="text-xs text-gray-500">Import & Export</div>
                    </div>
                </div>
                <nav class="hidden md:flex items-center gap-8">
                    <a href="#home" class="text-sm font-medium text-sky-600">Home</a>
                    <a href="#product" class="text-sm font-medium text-gray-600 hover:text-sky-600">Product</a>
                    <a href="#about" class="text-sm font-medium text-gray-600 hover:text-sky-600">About</a>
                    <a href="#contact" class="text-sm font-medium text-gray-600 hover:text-sky-600">Contact</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero-gradient py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        GY900E-AS4<br/>
                        <span class="text-sky-600">Power Analyzer</span>
                    </h1>
                    <p class="text-xl text-gray-600 leading-relaxed">
                        Professional 3-phase multifunction power meter with high precision measurement, 
                        RS485 communication, and IEC 61557-12:2018 compliance.
                    </p>
                    <div class="flex gap-4">
                        <a href="#product" class="px-8 py-4 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors">
                            View Details
                        </a>
                        <a href="#contact" class="px-8 py-4 border-2 border-sky-600 text-sky-600 rounded-xl font-medium hover:bg-sky-50 transition-colors">
                            Get Quote
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg" 
                         alt="GY900E-AS4" 
                         class="w-full rounded-2xl shadow-2xl"/>
                </div>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                <p class="text-xl text-gray-600">Advanced power monitoring technology</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-8 bg-sky-50 rounded-2xl">
                    <div class="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">⚡</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">High Accuracy</h3>
                    <p class="text-gray-600">0.5% measurement accuracy for precise monitoring</p>
                </div>
                <div class="p-8 bg-sky-50 rounded-2xl">
                    <div class="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">📡</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">RS485 Communication</h3>
                    <p class="text-gray-600">Modbus protocol for easy integration</p>
                </div>
                <div class="p-8 bg-sky-50 rounded-2xl">
                    <div class="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">📊</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">LED/LCD Display</h3>
                    <p class="text-gray-600">Clear digital display for all parameters</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Section -->
    <section id="product" class="py-20 px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Technical Specifications</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Model</div>
                    <div class="text-lg font-semibold text-gray-900">GY900E-AS4</div>
                </div>
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Dimensions</div>
                    <div class="text-lg font-semibold text-gray-900">72mm × 72mm</div>
                </div>
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Voltage Range</div>
                    <div class="text-lg font-semibold text-gray-900">AC 380V/220V</div>
                </div>
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Current Range</div>
                    <div class="text-lg font-semibold text-gray-900">AC 5A</div>
                </div>
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Accuracy</div>
                    <div class="text-lg font-semibold text-gray-900">0.5%</div>
                </div>
                <div class="p-6 bg-white rounded-xl border border-gray-200">
                    <div class="text-sm text-gray-500 mb-2">Communication</div>
                    <div class="text-lg font-semibold text-gray-900">RS485 / Modbus</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-white">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p class="text-xl text-gray-600 mb-8">Get professional power monitoring solutions</p>
            <div class="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-8 space-y-4">
                <h3 class="text-2xl font-bold">Guangzhou Xiaoyu Import and Export Co., Ltd.</h3>
                <p class="text-sky-100">📍 A256, 1st Floor, Shop 114, Nansha District, Guangzhou, China</p>
                <p class="text-sky-100">📧 summer@yucore.ltd</p>
                <p class="text-sky-100">📞 +86 150 1848 5957</p>
                <p class="text-sky-100">👤 Ms. Summer</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-6">
        <div class="max-w-7xl mx-auto text-center">
            <p class="text-gray-400">© 2025 Guangzhou Xiaoyu Import and Export Co., Ltd. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': 'attachment; filename="gy900e-website.html"',
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});