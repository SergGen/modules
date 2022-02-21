loadScript('js/a.js', () => {
  console.log(`from useFull = ${a}`);

  loadScript('js/b.js', () => {
    console.log(`Result ${a} + ${b} = ${ a + b }`);
  });
});