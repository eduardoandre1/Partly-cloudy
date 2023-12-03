function DataBoxmodule(global, name) {
  return (
    <div>
      <h2>{name}</h2>
      <h1>{global ? global : '--'}</h1>
    </div>
  );
}
export default DataBoxmodule;
