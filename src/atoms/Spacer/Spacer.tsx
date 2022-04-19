import React from "react"
import { Box } from "../Box"


/**
 * A component used to inject space where it's needed
 */
export const Spacer: React.FC< { id?: string }> = (props) => {
  return <Box {...props} />
}

Spacer.displayName = "Spacer"
