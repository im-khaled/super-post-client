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
        <div className="grid grid-cols-5 relative ">
            <div className="col-span-1 pe-5"><DashAside></DashAside></div>
            <div className="col-span-4 px-5 ps-10">
            {children}
            </div>
        </div>
        
      </section>
    )
  }