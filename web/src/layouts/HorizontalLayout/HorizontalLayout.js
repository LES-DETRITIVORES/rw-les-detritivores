const HorizontalLayout = ({ children }) => {
  return <>
      <div className="flex overflow-hidden w-max overflow-x-scroll">
        <span className="w-screen">{children}</span>
        <span className="w-screen">{children}</span>
        <span className="w-screen">{children}</span>
        <span className="w-screen">{children}</span>
      </div>
    </>
  }


export default HorizontalLayout
