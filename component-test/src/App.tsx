import React from "react";
import "./App.css";

// Import warehouse components
import ProductCardScanAvailable from "./warehouse-components/ProductCardScanAvailable";
import BatchCounter from "./warehouse-components/BatchCounter";
import SystemMessage from "./warehouse-components/SystemMessage";
import WorkspaceControls from "./warehouse-components/WorkspaceControls";
import Footer from "./warehouse-components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Warehouse Components Test</h1>
        <p>Testing LifeStation warehouse components functionality</p>
      </header>

      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Batch Counter Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Batch Counter Component</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <BatchCounter count={0} />
            <BatchCounter count={15} />
            <BatchCounter count={50} />
          </div>
        </section>

        {/* Product Card Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Product Card Scan Available</h2>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, 274px)",
            }}
          >
            <ProductCardScanAvailable deviceId="EV00079" property1="Okay" />
            <ProductCardScanAvailable deviceId="EV00083" property1="E1" />
            <ProductCardScanAvailable deviceId="EV00087" property1="E2" />
            <ProductCardScanAvailable deviceId="EV70001" property1="RMA" />
            <ProductCardScanAvailable deviceId="EV00091" property1="Hold" />
            <ProductCardScanAvailable deviceId="EV00094" property1="Warning" />
            <ProductCardScanAvailable
              deviceId="EV00097"
              property1="Processing"
            />
            <ProductCardScanAvailable
              deviceId=""
              property1="Grid Placeholder"
            />
          </div>
        </section>

        {/* System Messages Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>System Messages</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <SystemMessage
              property1="Warning"
              message="Please verify device condition before proceeding"
            />
            <SystemMessage
              property1="IT Notice"
              message="System maintenance scheduled for tonight at 11 PM EST"
            />
            <SystemMessage
              property1="Tip and info icon"
              message="Tip: Use the barcode scanner to quickly input device IDs"
            />
          </div>
        </section>

        {/* Workspace Controls Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Workspace Controls</h2>
          <WorkspaceControls
            onRemoveLastScan={() => console.log("Remove scan clicked")}
            onClearBatch={() => console.log("Clear batch clicked")}
            onEnterImei={() => console.log("IMEI entry clicked")}
          />
        </section>

        {/* Footer Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Footer Variants</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Footer property1="cancel-submit" />
            <Footer property1="back-submit" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
