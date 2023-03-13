import logo from "./logo.svg";
import "./App.css";
import image from "./asset/HP Pavilion 15-n230us Notebook PC.jpg";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
      {/* <div class="flex flex-row border-2 border-sky-500 p-2 gap-2 h-screen">
        <div class="basis-1/5 border-2 border-red-500 p-2">
          <div class="h-1/10 border-2 border-red-500">ati</div>

          <ul class=" h-8/10 border-2 border-red-500">
            <li class="p-2 border-2 border-black-500">1</li>
            <li class="p-2 border-2 border-black-500">2</li>
            <li class="p-2 border-2 border-black-500">3</li>
            <li class="p-2 border-2 border-black-500">4</li>
            <li class="p-2 border-2 border-black-500">5</li>
            <li class="p-2 border-2 border-black-500">6</li>
            <li class="p-2 border-2 border-black-500">7</li>
            <li class="p-2 border-2 border-black-500">8</li>
            <li class="p-2 border-2 border-black-500">9</li>
            <li class="p-2 border-2 border-black-500">9</li>
            <li class="p-2 border-2 border-black-500">9</li>
            <li class="p-2 border-2 border-black-500">9</li>
          </ul>
          <div class="h-1/10 border-2 border-red-500">
            <button>get start</button>
          </div>
        </div>
        <div class="basis-4/5 border-2 border-red-500 p-2">02</div>
      </div> */}
    </>
  );
}

export default App;
