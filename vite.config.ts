import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
//234
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base:"/"
})
