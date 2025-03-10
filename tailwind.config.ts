
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				clockify: {
					blue: '#8B5CF6',
					darkBlue: '#6D28D9',
					lightBlue: '#A78BFA',
					accent: '#FBBF24',
					lightGray: '#f8f9fa',
					darkGray: '#343a40'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'elastic-bounce': {
					'0%': { transform: 'scale(0.5)', opacity: '0' },
					'40%': { transform: 'scale(1.1)' },
					'60%': { transform: 'scale(0.9)' },
					'80%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'fade-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'message-pop': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'wave': {
					'0%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
					'100%': { transform: 'rotate(0) scale(1)', opacity: '1' }
				},
				'flip': {
					'0%': { transform: 'perspective(800px) rotateY(90deg)', opacity: '0' },
					'100%': { transform: 'perspective(800px) rotateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'elastic-bounce': 'elastic-bounce 0.9s ease-out forwards',
				'fade-up': 'fade-up 0.5s ease-out forwards', 
				'float': 'float 5s ease-in-out infinite',
				'message-pop': 'message-pop 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards',
				'wave': 'wave 1.5s ease-in-out',
				'rotate-in': 'rotate-in 0.7s ease-out forwards',
				'flip': 'flip 0.7s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
