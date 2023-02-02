/* ----------------------------------------------------
How to use
-------------------------------------------------------
export const useHogeStore= definePiniaStore('hoge', () => {
  const hoge = ref<string>('')

  function getHoge(): boolean {
    return hoge.value
  }

  function setHoge(value: string): void {
    hoge.value = value
  }

  return {
    getHoge,
    setHoge,
  }
})
---------------------------------------------------- */
