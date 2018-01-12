import instance from './index'

export const bookLoop = params => { return instance.get('/v1.0/pc_img_show', { params: params }) }
