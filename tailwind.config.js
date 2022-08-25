/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-[#0085FF]',
    'bg-[#48C4FA]',
    'bg-[#2FC0AF]',
    'bg-[#FBF6F6]',

    'hover:bg-[#0085FF]',
    'hover:bg-[#48C4FA]',
    'hover:bg-[#2FC0AF]',
    'hover:bg-[#FBF6F6]',
    
    'focus:bg-[#0085FF]',
    'focus:bg-[#48C4FA]',
    'focus:bg-[#2FC0AF]',
    'focus:bg-[#FBF6F6]',
    
    'text-[#0085FF]',
    'text-[#48C4FA]',
    'text-[#2FC0AF]',
    'text-[#FBF6F6]',
    
    'hover:text-[#0085FF]',
    'hover:text-[#48C4FA]',
    'hover:text-[#2FC0AF]',
    'hover:text-[#FBF6F6]',

    'border-[#0085FF]',
    'border-[#48C4FA]',
    'border-[#2FC0AF]',
    'border-[#FBF6F6]',
        
    'border-b-[#0085FF]',
    'border-b-[#48C4FA]',
    'border-b-[#2FC0AF]',
    'border-b-[#FBF6F6]',
        
    'ring-[#0085FF]',
    'ring-[#48C4FA]',
    'ring-[#2FC0AF]',
    'ring-[#FBF6F6]',
        
    {
        pattern: /(bg|text|border|ring)-(red|green|blue|yellow)/,
        
        variants: ['hover', 'focus', 'active', 'disabled']
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
