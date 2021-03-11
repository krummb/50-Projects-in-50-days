const container = document.getElementById("container");
const colors = [
  "#D00DEE",
  "#7BA1C1",
  "#6D5DB2",
  "#AC31A4",
  "#CD3C78",
  "#749827",
  "#7A31CF",
  "#32D9F8",
  "#B94FBF",
  "#37D744",
  "#FC984C",
  "#0B73D3",
  "#305094",
  "#95ED4A",
  "#D82BF6",
  "#0F2987",
  "#693DC0",
  "#10171B",
  "#CA1A85",
  "#55D71D",
  "#E1C0B5",
  "#81EBFB",
  "#C1CE8D",
  "#A47BFF",
  "#045EB6",
  "#C978A3",
  "#E24CE4",
  "#8B549E",
  "#13290",
  "#8F5EE1",
  "#5ABC35",
  "#F184E7",
  "#962FBC",
  "#DD0F6E",
  "#0FE6EC",
  "#8363F9",
  "#9FB149",
  "#9E0CDB",
  "#8B98AF",
  "#7BF52D",
  "#2A08D0",
  "#260D85",
  "#62370",
  "#36CCF6",
  "#C62BC4",
  "#9EE97C",
  "#A92B7B",
  "#0ED35B",
  "#582152",
  "#818AD5",
  "#F74E1C",
  "#AB6D6D",
  "#97B6A1",
  "#20A51F",
  "#79104F",
  "#636A17",
  "#7C2D99",
  "#B2069B",
  "#8CB21D",
  "#1973AB",
  "#20F8B1",
  "#F2D2F7",
  "#CAAD14",
  "#9904C2",
  "#2EC916",
  "#4364C1",
  "#5C43F4",
  "#ABE580",
  "#91AA66",
  "#C95826",
  "#F7A5B7",
  "#703C42",
  "#0EDE46",
  "#FD897F",
  "#0485DB",
  "#CC262E",
  "#DAF063",
  "#362156",
  "#7440EB",
  "#0E094D",
  "#40A76D",
  "#54745E",
];

const squares = 500;

for (let i = 0; i < squares; i++) {
  let randomNum = Math.floor(Math.random() * colors.length);
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  function setColor(e) {
    e.style.backgroundColor = colors[randomNum];
  }

  function removeColor(e) {
    e.style.backgroundColor = "#1d1d1d";
  }
}
