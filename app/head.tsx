export default function Head() {
  return (
    <>
      <title>Stat Quo | Tech That Moves. Stay Ahead.</title>
      <meta
        name="description"
        content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know."
      />

      {/* Viewport + theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Favicon and icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph (OG) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Stat Quo | Tech That Moves. Stay Ahead." />
      <meta property="og:description" content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know." />
      <meta property="og:url" content="https://stat-quo.com/" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stat Quo | Tech That Moves. Stay Ahead." />
      <meta name="twitter:description" content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know." />
      <meta name="twitter:image" content="/og-image.jpg" />
    </>
  )
}
