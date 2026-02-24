import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // === 完整的 HTML 版本 (独立文件) ===
    const htmlComplete = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GY900E-AS4 - Multifunction Power Analyzer | Xiaoyu Import & Export</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
        }
        .hero-gradient { 
            background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0f9ff 100%);
            position: relative;
        }
        .feature-card { 
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e2e8f0;
        }
        .feature-card:hover { 
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: #0ea5e9;
        }
        .smooth-transition { transition: all 0.3s ease; }
        .img-hover:hover { 
            transform: scale(1.05);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .spec-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            transition: all 0.3s ease;
        }
        .spec-card:hover {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(14, 165, 233, 0.15);
        }
        a { text-decoration: none; }
        img { max-width: 100%; height: auto; display: block; }
        section { scroll-margin-top: 80px; }
        
        /* Enhanced gradient backgrounds */
        .bg-gradient-premium {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        /* Smooth scroll */
        html { scroll-behavior: smooth; }
        
        /* Enhanced shadows */
        .shadow-premium {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        /* Gallery hover effect */
        .gallery-item {
            position: relative;
            overflow: hidden;
        }
        .gallery-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        .gallery-item:hover::after {
            opacity: 1;
        }
    </style>
</head>
<body class="bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <a href="#home" class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span class="text-white font-bold text-xl">X</span>
                    </div>
                    <div>
                        <div class="text-lg font-bold text-slate-900">Xiaoyu</div>
                        <div class="text-xs text-slate-500">Import & Export</div>
                    </div>
                </a>
                <nav class="hidden md:flex items-center gap-8">
                    <a href="#home" class="text-sm font-medium text-sky-600 smooth-transition">Home</a>
                    <a href="#product" class="text-sm font-medium text-slate-600 hover:text-sky-600 smooth-transition">Product</a>
                    <a href="#about" class="text-sm font-medium text-slate-600 hover:text-sky-600 smooth-transition">About</a>
                    <a href="#contact" class="text-sm font-medium text-slate-600 hover:text-sky-600 smooth-transition">Contact</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative hero-gradient pt-24 pb-32 px-6 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center opacity-5" style="background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600');"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="space-y-8">
                    <div class="inline-block">
                        <div class="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                            Industrial Power Meter
                        </div>
                    </div>
                    <h1 class="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        GY900E-AS4
                        <span class="block text-sky-600 mt-2">Multifunction Power Analyzer</span>
                    </h1>
                    <p class="text-xl text-slate-600 leading-relaxed">
                        Professional 3-phase power monitoring solution with RS485 communication
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#product" class="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 smooth-transition shadow-lg shadow-sky-200">
                            View Details
                            <span class="ml-2">→</span>
                        </a>
                        <a href="#contact" class="inline-flex items-center px-8 py-4 border-2 border-sky-600 text-sky-600 rounded-xl font-medium hover:bg-sky-50 smooth-transition">
                            Get Quote
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/5e0dfd193_3.jpg" 
                         alt="GY900E-AS4 Power Meter" 
                         class="relative rounded-2xl shadow-2xl w-full img-hover"/>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Specs -->
    <section class="py-12 bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div><div class="text-sm text-slate-500 mb-2">Model</div><div class="text-xl font-bold">GY900E-AS4</div></div>
                <div><div class="text-sm text-slate-500 mb-2">Size</div><div class="text-xl font-bold">72×72mm</div></div>
                <div><div class="text-sm text-slate-500 mb-2">Accuracy</div><div class="text-xl font-bold">±0.5%</div></div>
                <div><div class="text-sm text-slate-500 mb-2">Communication</div><div class="text-xl font-bold">RS485</div></div>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="py-24 px-6 bg-gradient-to-b from-white to-sky-50/50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
                <p class="text-xl text-slate-600">Industrial-grade precision, intelligent monitoring</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="feature-card p-8 bg-white rounded-2xl shadow-lg smooth-transition">
                    <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">⚡</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">3-Phase Power Monitoring</h3>
                    <p class="text-slate-600 text-sm">Accurate measurement of three-phase voltage, current, power factor and all electrical parameters</p>
                </div>
                <div class="feature-card p-8 bg-white rounded-2xl shadow-lg smooth-transition">
                    <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">📡</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">RS485 Communication</h3>
                    <p class="text-slate-600 text-sm">Modbus protocol support, easy integration into automation systems</p>
                </div>
                <div class="feature-card p-8 bg-white rounded-2xl shadow-lg smooth-transition">
                    <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">📊</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">High Precision Display</h3>
                    <p class="text-slate-600 text-sm">LED/LCD digital display with clear and accurate readings</p>
                </div>
                <div class="feature-card p-8 bg-white rounded-2xl shadow-lg smooth-transition">
                    <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                        <span class="text-white text-2xl">🛡️</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">Industrial Grade</h3>
                    <p class="text-slate-600 text-sm">Compliant with IEC 61557-12 standard, stable and reliable</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Images -->
    <section class="py-24 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Product Gallery</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="group relative aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/201a5862c_1.jpg" 
                         alt="Product view 1" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="group relative aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/ace2bd821_2.jpg" 
                         alt="Product view 2" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="group relative aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69707d1ba6e2ca133d3dcab5/a267e0bea_4.jpg" 
                         alt="Product view 3" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="text-center space-y-4">
                    <div class="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                        <span class="text-3xl">🌍</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900">Global Supply</h3>
                    <p class="text-sm text-slate-500">Serving customers worldwide with rapid response</p>
                </div>
                <div class="text-center space-y-4">
                    <div class="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                        <span class="text-3xl">🏆</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900">Quality Assurance</h3>
                    <p class="text-sm text-slate-500">International standards, reliable quality</p>
                </div>
                <div class="text-center space-y-4">
                    <div class="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
                        <span class="text-3xl">🛡️</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900">Professional Service</h3>
                    <p class="text-sm text-slate-500">Technical support, worry-free after-sales</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600');"></div>
        <div class="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold text-white">Ready to Start Your Project?</h2>
            <p class="text-lg text-white/90 max-w-2xl mx-auto">
                Contact us for professional power monitoring solutions and competitive quotes
            </p>
            <div class="flex flex-wrap gap-4 justify-center pt-4">
                <a href="#contact" class="inline-flex items-center px-10 py-4 bg-white text-sky-600 hover:bg-sky-50 rounded-xl font-medium shadow-xl smooth-transition">
                    Contact Us
                    <span class="ml-2">→</span>
                </a>
                <a href="#product" class="inline-flex items-center px-10 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl font-medium smooth-transition">
                    Learn More
                </a>
            </div>
        </div>
    </section>

    <!-- Product Details -->
    <section id="product" class="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Model</div><div class="text-2xl font-bold text-slate-900">GY900E-AS4</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Dimensions</div><div class="text-2xl font-bold text-slate-900">72mm × 72mm</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Cutout Size</div><div class="text-2xl font-bold text-slate-900">68mm × 68mm</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Display</div><div class="text-2xl font-bold text-slate-900">LED/LCD Digital</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Voltage Range</div><div class="text-2xl font-bold text-slate-900">AC 380V/220V</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Current Range</div><div class="text-2xl font-bold text-slate-900">AC 5A</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Accuracy</div><div class="text-2xl font-bold text-slate-900">0.5%</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Communication</div><div class="text-2xl font-bold text-slate-900">RS485 / Modbus</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Power Supply</div><div class="text-2xl font-bold text-slate-900">AC/DC 80-270V</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Frequency</div><div class="text-2xl font-bold text-slate-900">50Hz / 60Hz</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Operating Temp</div><div class="text-2xl font-bold text-slate-900">-10°C ~ +55°C</div></div>
                <div class="spec-card p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg"><div class="text-sm text-sky-600 font-semibold mb-3">Standard</div><div class="text-2xl font-bold text-slate-900">IEC 61557-12: 2018</div></div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="space-y-6">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                        🏢 Since 2021
                    </div>
                    <h2 class="text-4xl font-bold text-slate-900">Guangzhou Xiaoyu Import and Export Co., Ltd.</h2>
                    <p class="text-slate-700 leading-relaxed">
                        We are a professional company specializing in industrial power monitoring equipment 
                        import and export trade, committed to providing high-quality power meters, power 
                        analyzers and other power monitoring products to global customers.
                    </p>
                    <p class="text-slate-700 leading-relaxed">
                        With years of industry experience and a professional technical team, we provide 
                        comprehensive solutions from product selection, technical support to after-sales 
                        service. Our products are widely used in industrial automation, energy management, 
                        and smart building applications.
                    </p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" alt="Company" class="rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p class="text-xl text-slate-600">Get professional power monitoring solutions and competitive quotes</p>
            </div>
            <div class="bg-gradient-to-br from-sky-600 via-blue-600 to-blue-700 text-white rounded-3xl p-16 space-y-8 shadow-premium relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <h3 class="text-3xl font-bold mb-2">Guangzhou Xiaoyu Import and Export Co., Ltd.</h3>
                    <p class="text-sky-100 text-lg mb-8">Professional Power Monitoring Equipment Supplier</p>
                    <div class="space-y-6 text-lg">
                        <p class="flex items-start gap-4"><span class="text-3xl">📍</span><span class="leading-relaxed">A256, 1st Floor, Shop 114, No. 3 & 4, Zhongjing 4th Street, Nansha District, Guangzhou, China</span></p>
                        <p class="flex items-center gap-4"><span class="text-3xl">📧</span><a href="mailto:summer@yucore.ltd" class="hover:underline font-semibold">summer@yucore.ltd</a></p>
                        <p class="flex items-center gap-4"><span class="text-3xl">📞</span><a href="tel:+8615018485957" class="hover:underline font-semibold">+86 150 1848 5957</a></p>
                        <p class="flex items-center gap-4"><span class="text-3xl">👤</span><span class="font-semibold">Ms. Summer - Sales Manager</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-3 gap-12 mb-8">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-white font-bold text-xl">X</span>
                        </div>
                        <div>
                            <div class="text-lg font-bold">Xiaoyu</div>
                            <div class="text-xs text-slate-400">Import & Export</div>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400">Professional industrial power monitoring equipment supplier</p>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                    <div class="space-y-2">
                        <a href="#home" class="block text-sm text-slate-400 hover:text-white">Home</a>
                        <a href="#product" class="block text-sm text-slate-400 hover:text-white">Product</a>
                        <a href="#about" class="block text-sm text-slate-400 hover:text-white">About</a>
                        <a href="#contact" class="block text-sm text-slate-400 hover:text-white">Contact</a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Contact</h3>
                    <div class="space-y-2 text-sm text-slate-400">
                        <p>📍 Nansha District, Guangzhou</p>
                        <p>📧 summer@yucore.ltd</p>
                        <p>📞 +86 150 1848 5957</p>
                        <p>👤 Ms. Summer</p>
                    </div>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                <p>© 2025 Guangzhou Xiaoyu Import and Export Co., Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

    // 直接返回 HTML 文件
    return new Response(htmlComplete, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': 'attachment; filename="gy900e-website.html"',
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});