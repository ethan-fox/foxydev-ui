import { useState } from "react"

const HomeBanner = () => {
  const [domain, setDomain] = useState(".com")

  return (
    <div className="bg-primary py-24">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-logo-text text-center max-w-2xl mx-auto whitespace-nowrap"
        style={{ fontFamily: "Lucida Console, monospace" }}
      >
        {`ethan builds {${domain}}`}
      </h1>
    </div>
  )
}

export default HomeBanner
