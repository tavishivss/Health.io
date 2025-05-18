export default function manifest() {
  return {
    name: "Afya Health Blog - Health and Fitness Tips for busy people",
    short_name: "Afya Health Blog",
    description:
      "Discover a treasure trove of expert insights on health, fitness, and well-being. Explore our latest articles covering nutrition, mental health, exercise, and more. Take a step towards a healthier you with our health and wellness blog.",
    start_url: "/",
    display: "standalone",
    //   background_color: '#fff',
    //   theme_color: '#fff',
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
