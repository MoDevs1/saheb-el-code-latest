'use client'

import { Code2, Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'الخدمات', href: '#services' },
    { label: 'الأعمال', href: '#portfolio' },
    { label: 'عن الشركة', href: '#why-us' },
    { label: 'التواصل', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Heart, href: '#', label: 'فيسبوك' },
    { icon: Mail, href: '#', label: 'إنستغرام' },
    { icon: Phone, href: '#', label: 'لينكدإن' },
    { icon: Heart, href: '#', label: 'تويتر' },
  ]

  return (
    <footer className="bg-foreground text-white pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">صاحب الكود</h3>
            </div>
            <p className="text-gray-300 text-sm">
              نساعدك على بناء حضور رقمي قوي من خلال مواقع احترافية وعالية الأداء
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  صفحات هبوط
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  مواقع الشركات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  متاجر إلكترونية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  منصات تعليمية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/?text=مرحبا%20أرغب%20في%20الاستفسار"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.514-1.19.96 3.852a9.879 9.879 0 00-.419 4.76c.043.867.271 1.719.541 2.531.26.775.643 1.485 1.196 2.04a9.9 9.9 0 005.031 2.722h.005c.344.043.683.066 1.02.066a9.88 9.88 0 009.031-5.474c.35-.704.656-1.438.909-2.195.253-.757.43-1.54.527-2.328A9.884 9.884 0 0012.05 6.97z" />
                </svg>
                واتساب
              </a>
              <p className="text-gray-300">البريد: info@sahabalkod.com</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            جميع الحقوق محفوظة © {currentYear} <span className="text-primary">صاحب الكود</span> - تطوير المواقع والتطبيقات
          </p>
          <p className="mt-2 text-sm">
            صُنع بـ ❤️ لأصحاب الأعمال والشركات
          </p>
        </div>
      </div>
    </footer>
  )
}
