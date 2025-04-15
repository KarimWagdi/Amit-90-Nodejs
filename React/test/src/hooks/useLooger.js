export default function useLogger() {
  function logComponentRender() {
    console.log(`Rendering logger component`);
  }

  return [logComponentRender];
}
