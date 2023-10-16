import "./App.css";
import Form from "./components/GUIDForm";

function App() {
  return (
    <main className="flex-container spacing-20 padding-20">
      <div className="flex-container-column flex-1 spacing-20">
        <div className="box border-black padding-20">
          <Form />
        </div>
        <div id="box-3" className="box border-black padding-20 max-w-1/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nisi nobis labore repudiandae dolores incidunt
            voluptatibus architecto, quos dignissimos, qui fugiat magnam. Dicta,
            iure optio aspernatur dignissimos perspiciatis quo voluptatem!
          </p>
        </div>
      </div>
      <div id="box-1" className="box image-container flex-1 border-black">
        <img src="/wallhaven-o52y1l.jpg" alt="Test image" />
      </div>
    </main>
  );
}

export default App;
