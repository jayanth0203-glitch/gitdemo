export const metadata = {
  title: "Section B Attendance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex min-h-screen">
          
          {/* Sidebar */}
          <div className="w-64 bg-zinc-900 p-5">
            <h2 className="text-xl font-bold mb-8">Attendance</h2>

            <ul className="space-y-4">
              <li className="hover:text-orange-400 cursor-pointer">
                Overview
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Mark Attendance
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Analysis
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}