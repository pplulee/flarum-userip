/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import ipinfo from './Model/IPInfo'

export type Data = {
  country: NestedStringArray
  city: NestedStringArray
} & Record<string, NestedStringArray>

export default class ProcessData {
  private data: Data

  constructor(ipInfo: ipinfo) {
    this.data = {
      country: ipInfo.country(),
      city: ipInfo.city(),
    }
  }

  process(errorNotice: NestedStringArray) {
    const elements = {} as Data
    let errorCount = 0
    
    for (const [key, value] of Object.entries(this.data)) {
      if (errorCount > 2) return false
      errorCount = value ? errorCount : ++errorCount
      elements[key] = value || errorNotice
    }

    return elements
  }
}
