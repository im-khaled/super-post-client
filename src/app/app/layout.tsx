import DashAside from "../components/DashBoard/DashAside"
import DashNav from "../components/DashBoard/DashNav"

export default function AppLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <DashNav></DashNav>
        <div className="flex justify-start items-start ">
            <DashAside></DashAside>
            {children}
        </div>
        
      </section>
    )
  }