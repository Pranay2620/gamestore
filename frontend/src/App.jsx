import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GamePage, HomePage, LayoutPage } from "./pages"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

export const queryClient = new QueryClient()

const router = createBrowserRouter([
  { path: '/', element: <LayoutPage />, children: [
    { index: true, element: <HomePage /> },
    { path: '/add', element: <GamePage /> },
  ] },
 
])

export default function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
       <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  )
}