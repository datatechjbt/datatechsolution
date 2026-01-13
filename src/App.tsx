// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Header } from './components/header'
// import { Hero } from './components/hero'
// import { Services } from './components/services'
// import { WhyChooseUs } from './components/why-choose-us'
// import { Registrations } from './components/registrations'
// import { Process } from './components/process'
// import { Testimonials } from './components/testimonials'
// import { Blogs } from './components/blogs'
// import { Footer } from './components/footer'
// import { Contact } from './components/contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from './pages/homepage'

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    // loader: loadRootData,
  },
]);
function App() {

  return (
  <RouterProvider router={router} />

  )
}

export default App
