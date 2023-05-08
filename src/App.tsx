import { createUseStyles } from "react-jss";
import "./App.css";
import apc from "/apckey25.jpg";

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    height: 215,
    margin: "40px 0px 0px 14px",
    width: 538,
    gap: 16,
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  },
  gridButton: {
    background: "black",
    borderRadius: 6,
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          background: `url("${apc}") no-repeat scroll -100px -50px #e8e8e8`,
          flexGrow: 1,
        }}
      >
        {/* LED GRID */}
        <div className={classes.grid}>
          {Array(8 * 5)
            .fill(null)
            .map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <div key={i} className={classes.gridButton}>
                  {row}x{col}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
