import "./exhibition.css";
import { useState } from "react";
import Active1 from "../../components/exhibition/active1";
import Active2 from "../../components/exhibition/active2";
import { ActiveImg } from "../../components/exhibition/active1";

const Exhibition = () => {
  const [activeTab, setActiveTab] = useState("active1");
  return (
    <section className="exhibition">
      <h3>RETROSPECTIVE</h3>
      <h1>
        DOROTHEA
        <br /> LANGE
      </h1>
      <time>OCTOBER 15 - MARCH 18</time>
      <h3>FLOOR 5</h3>
      <section className="active-state">
        {activeTab === "active1" && <ActiveImg />}
        {/* {activeTab === "active2" && <Active2 />} */}
        {/* {activeTab === "counci3" && <Council />} */}
      </section>
      <div className="active-exhibition">
        <button
          className={activeTab === "active1" ? "current" : ""}
          onClick={() => setActiveTab("active1")}
        ></button>
        <button
          className={activeTab === "active2" ? "current" : ""}
          onClick={() => setActiveTab("active2")}
        ></button>
        <button
          className={activeTab === "active3" ? "current" : ""}
          onClick={() => setActiveTab("active3")}
        ></button>
        <button
          className={activeTab === "active4" ? "current" : ""}
          onClick={() => setActiveTab("active4")}
        ></button>
        <button
          className={activeTab === "active5" ? "current" : ""}
          onClick={() => setActiveTab("active5")}
        ></button>
      </div>
      <section className="active-state">
        {activeTab === "active1" && <Active1 />}
        {activeTab === "active2" && <Active2 />}
        {/* {activeTab === "counci3" && <Council />} */}
      </section>
    </section>
  );
};
export default Exhibition;
