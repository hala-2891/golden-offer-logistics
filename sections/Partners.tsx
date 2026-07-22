<div className="relative overflow-hidden">

  <div className="flex w-max animate-loop">

    <div className="flex gap-20 px-10">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="
          text-xl
          font-semibold
          theme-text-muted
          whitespace-nowrap
          opacity-70
          hover:opacity-100
          transition
          "
        >
          {partner}
        </div>
      ))}
    </div>


    <div className="flex gap-20 px-10">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="
          text-xl
          font-semibold
          theme-text-muted
          whitespace-nowrap
          opacity-70
          hover:opacity-100
          transition
          "
        >
          {partner}
        </div>
      ))}
    </div>

  </div>

</div>