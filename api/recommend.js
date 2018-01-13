import instance from './index'

export const bookLoop = params => { return instance.get('/v1.0/pc_img_show', { params: params }) }

export const bookList = params => { return instance.get('/v1.0/pc_list_recommend', { params: params }) }

export const weekRecommend = params => { return instance.get('/v1.0/pc_week_recommended', { params: params }) }
