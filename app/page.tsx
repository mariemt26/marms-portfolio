import Room from './components/Room'

//Had some issues with TypeError. Things from Spline clashed with Next.js.
//so it was easier to put all the Spline stuff in a seperate file and loop it back to this page.tsx
//Also, apparently Next.js loves it when you name your files page.tsx. Who would have thought.
export default function Home() {
  return <Room />;
}