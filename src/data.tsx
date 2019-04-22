export const podColor = {
  Running: "#00b9e4",
  Empty: "#ffffff",
  "Not Ready": "#beedf9",
  Warning: "#f39d3c",
  Failed: "#d9534f",
  Pulling: "#d1d1d1",
  Pending: "#ededed",
  Succceeded: "#3f9c35",
  Terminating: "#00659c",
  Unknown: "#f9d67a"
};

export const pods = [
  {
    id: 1,
    status: {phase : "Running"},
    value: 20,
    color: "yellow",
  },
  {
    id: 2,
    status: {phase : "Pulling"},
    value: 20,
    color: "red",
  },
  {
    id: 3,
    value: 20,
    status: {phase : "Pending"},
    color: 'green'
  },
  {
    id: 4,
    value: 20,
    status: {phase : "Running"},
    color: 'teal'
  },
  {
    id: 5,
    value: 20,
    status: {phase : "Running"},
    color: 'blue'
  },
  {
    id: 6,
    value: 20,
    status: {phase : "Failed"},
    color: 'orange'
  }
]

export const nodes = [
  { data: { id: 'j', parent:'group', name: 'nodeJs', weight: 65, faveColor: '#6FB1FC', faveShape: 'ciecle', pods: [  {
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "red",
  },
  {
    id: 3,
    color: 'green'
  },
  {
    id: 4,
    color: 'teal'
  },
  {
    id: 5,
    color: 'blue'
  },
  {
    id: 6,
    color: 'orange'
  }]} },
  { data: { id: 'e', parent:'group', name: 'mySql', weight: 45, faveColor: 'blue', faveShape: 'ellipse', pods:[{
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "red",
  }] } },
  { data: { id: 'k', parent:'group2', name: 'Mongodb', weight: 75, faveColor: '#86B342', faveShape: 'circle', pods: [{
    id: 1,
    status: "running",
    color: "green",
  }] } },
  { data: { id: 'g', name: 'redis', weight: 70, faveColor: '#F5A45D', faveShape: 'circle', pods:[{
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "red",
  }] } },
  { data: { id: 'h', parent:'group2', name: 'rover', weight: 100, faveColor: '#F5A45D', faveShape: 'circle', pods:[{
    id: 1,
    status: "running",
    color: "red",
  },] } }
]

export const edges = [
  { data: { source: 'j', target: 'e', faveColor: '#6FB1FC', strength: 90 } },
  { data: { source: 'j', target: 'k', faveColor: '#6FB1FC', strength: 70 } },
  { data: { source: 'j', target: 'g', faveColor: '#6FB1FC', strength: 80 } },
  { data: { source: 'g', target: 'j', faveColor: '#F5A45D', strength: 90 }, classes: 'dashed' },
]

export const data = [
  { data: { id: 'j', parent:'group', name: 'nodeJs', weight: 65, faveColor: '#6FB1FC', faveShape: 'ciecle', pods: [  {
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "red",
  },
  {
    id: 3,
    color: 'green'
  },
  {
    id: 4,
    color: 'teal'
  },
  {
    id: 5,
    color: 'blue'
  },
  {
    id: 6,
    color: 'orange'
  }]} },
  { data: { id: 'e', parent:'group', name: 'mySql', weight: 45, faveColor: 'blue', faveShape: 'ellipse', pods:[  {
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "red",
  },
  {
    id: 3,
    color: 'green'
  },
  {
    id: 4,
    color: 'teal'
  }] } },
  { data: { id: 'k', parent:'group2', name: 'Mongodb', weight: 75, faveColor: '#86B342', faveShape: 'circle', pods: [{
    id: 1,
    status: "running",
    color: "green",
  },  {
    id: 3,
    color: 'blue'
  },
  {
    id: 4,
    color: 'teal'
  },] } },
  { data: { id: 'g', name: 'redis', weight: 70, faveColor: '#F5A45D', faveShape: 'circle', pods:[{
    id: 1,
    status: "running",
    color: "yellow",
  },
  {
    id: 2,
    color: "blue",
  }] } },
  { data: { id: 'h', parent:'group2', name: 'rover', weight: 100, faveColor: '#F5A45D', faveShape: 'circle', pods:[{
    id: 1,
    status: "running",
    color: "red",
  },] } }
]