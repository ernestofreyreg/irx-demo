import { Router } from '../routes'

export const openPageEvent = page => ev => {
  if (ev && Object.prototype.hasOwnProperty.call(ev, 'preventDefault')) {
    ev.preventDefault()
  }

  return Router.pushRoute(page)
}

export const openPageEventHard = page => ev => {
  if (ev && Object.prototype.hasOwnProperty.call(ev, 'preventDefault')) {
    ev.preventDefault()
  }

  global.location.href = page
}

export const redirectTo = (ctx, page) => {
  if (ctx.res) {
    return ctx.res.redirect(`/${page}`)
  }

  return Router.pushRoute(page)
}

export const createTypes = (...types) => types.reduce((prev, type) => ({...prev, [type]: type}), {})
