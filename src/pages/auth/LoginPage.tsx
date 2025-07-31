import { LoginForm } from '@/components/forms/LoginForm'

export const LoginPage = () => {
  return (
    <div className="h-screen w-screen p-4 bg-white">
      <div className="w-full mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px] bg-white rounded-2xl overflow-hidden">
          
          {/* Left Panel - Decorative */}
          <div className="lg:col-span-1 bg-[#f7f7f7] relative overflow-hidden">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            
            {/* Spinning Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-[#f7f7f7] rounded-full flex items-center justify-center transition-all duration-1000 hover:rotate-360 hover:scale-110 group">
                <div className="w-24 h-24 rounded-full relative">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 rounded-full blur-md opacity-60"></div>
                  
                  {/* Main ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 rounded-full"></div>
                  
                  {/* Inner cutout to make it hollow */}
                  <div className="absolute inset-2 bg-[#f7f7f7] rounded-full"></div>
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 rounded-full blur-sm opacity-40"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 text-black">
              <div>
                <h3 className="text-sm font-medium opacity-80">A WISE QUOTE</h3>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold leading-tight">
                  Get Everything You Want
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  You can get everything you want if you work hard, trust the process, and stick to the plan.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Login Form */}
          <div className="lg:col-span-1 flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              {/* Login Form */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 