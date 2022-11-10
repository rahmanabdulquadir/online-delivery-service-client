import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Online Delivery Service App`
  }, [title])
}

export default useTitle;