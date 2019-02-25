/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Debug from 'debug'
const debug = Debug('k8s/view/insert-view')

import { removeAllDomChildren } from '@kui-shell/core/webapp/util/dom'
import { getActiveView } from '@kui-shell/core/webapp/views/sidecar'

/**
 * Update the current view into the sidecar; this is helpful for tab
 * mode switching.
 *
 */
export default (view: HTMLElement) => {
  debug('insertView', view)

  const container = getActiveView()
  debug('insertView.container', container)

  removeAllDomChildren(container)
  container.appendChild(view)
}