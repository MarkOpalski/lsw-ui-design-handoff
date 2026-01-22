import React from "react";
import "./App.css";

// Import warehouse components
import ProductCardScanAvailable from "../warehouse-components/ProductCardScanAvailable";
import BatchCounter from "../warehouse-components/BatchCounter";
import SystemMessage from "../warehouse-components/SystemMessage";
import WorkspaceControls from "../warehouse-components/WorkspaceControls";
import Footer from "../warehouse-components/Footer";

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
            <div style={{ fontSize: "60px" }}>
              <BatchCounter count={27} />
            </div>
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
            <ProductCardScanAvailable deviceId="EV00079" state="Okay" />
            <ProductCardScanAvailable
              deviceId="EV00083"
              state="E1"
              errorCode="EV00083"
            />
            <ProductCardScanAvailable
              deviceId="EV00087"
              state="E2"
              errorCode="EV00087"
            />
            <ProductCardScanAvailable deviceId="EV70001" state="RMA" />
            <ProductCardScanAvailable deviceId="EV00091" state="Hold" />
            <ProductCardScanAvailable deviceId="EV00094" state="Warning" />
            <ProductCardScanAvailable deviceId="EV00097" state="Processing" />
            <ProductCardScanAvailable deviceId="" state="Grid Placeholder" />
          </div>
        </section>

        {/* System Messages Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>System Messages</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <SystemMessage
              type="warning"
              message="Please verify device condition before proceeding with scan operation"
            />
            <SystemMessage
              type="notice"
              message="System maintenance scheduled for tonight at 11:00 PM EST"
            />
            <SystemMessage
              type="info"
              message="Tip: You can use the barcode scanner to quickly input device IDs"
            />
          </div>
        </section>

        {/* Workspace Controls Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Workspace Controls</h2>
          <WorkspaceControls
            onRemoveScan={() => console.log("Remove scan clicked")}
            onClearBatch={() => console.log("Clear batch clicked")}
            onImeiEntry={(imei) => console.log("IMEI entered:", imei)}
          />
        </section>

        {/* Footer Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Footer Variants</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Footer
              variant="cancel-submit"
              onCancel={() => console.log("Cancel clicked")}
              onSubmit={() => console.log("Submit clicked")}
            />
            <Footer
              variant="back-submit"
              onBack={() => console.log("Back clicked")}
              onSubmit={() => console.log("Submit clicked")}
            />
            <Footer variant="processing" disabled={true} />
          </div>
        </section>

        {/* Interactive Test */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Interactive Test Scenario</h2>
          <p>Simulated warehouse workflow with batch management:</p>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <BatchCounter count={3} />
            <br />
            <SystemMessage
              type="info"
              message="Scan devices to add to current batch"
            />
            <br />
            <div
              style={{
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "repeat(auto-fit, 274px)",
              }}
            >
              <ProductCardScanAvailable deviceId="EV00101" state="Okay" />
              <ProductCardScanAvailable deviceId="EV00102" state="Okay" />
              <ProductCardScanAvailable deviceId="EV00103" state="Warning" />
            </div>
            <br />
            <WorkspaceControls
              onRemoveScan={() => alert("Remove last scan")}
              onClearBatch={() => alert("Clear entire batch")}
              onImeiEntry={(imei) => alert(`IMEI entered: ${imei}`)}
            />
            <br />
            <Footer
              variant="cancel-submit"
              onCancel={() => alert("Cancel workflow")}
              onSubmit={() => alert("Submit batch for processing")}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
