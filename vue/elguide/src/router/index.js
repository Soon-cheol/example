import Vue from 'vue'
import Router from 'vue-router'

// html
import layoutButton from '@/html/common/layoutButton'
import layoutCarousel from '@/html/common/layoutCarousel'
import layoutCheckbox from '@/html/common/layoutCheckbox'
import layoutCommon from '@/html/common/layoutCommon'
import layoutForm from '@/html/common/layoutForm'
import layoutInput from '@/html/common/layoutInput'
import layoutPaging from '@/html/common/layoutPaging'
import layoutPicker from '@/html/common/layoutPicker'
import layoutPopup from '@/html/common/layoutPopup'
import layoutRadio from '@/html/common/layoutRadio'
import layoutSelect from '@/html/common/layoutSelect'
import layoutTable from '@/html/common/layoutTable'
import layoutTextarea from '@/html/common/layoutTextarea'

import categoryList from '@/html/contants/category/list'

import lineList from '@/html/contants/line/list'
import lineEdit from '@/html/contants/line/edit'
import lineView from '@/html/contants/line/view'

import contantsList from '@/html/contants/contants/list'
import contantsView from '@/html/contants/contants/view'
import contantsEditYoutube from '@/html/contants/contants/editYoutube'
import contantsEditAsmr from '@/html/contants/contants/editAsmr'
import contantsEditBasic from '@/html/contants/contants/editBasic'
import contantsEditList from '@/html/contants/contants/editList'
import contantsEditCard from '@/html/contants/contants/editCard'
import contantsEditInteractive from '@/html/contants/contants/editInteractive'

import tagList from '@/html/contants/tag/list'

import searchBestList from '@/html/contants/search/bestList'
import searchRecommList from '@/html/contants/search/recommList'
import searchRelationList from '@/html/contants/search/relationList'
import searchplaceholderList from '@/html/contants/search/placeholderList'

import cpList from '@/html/cp/list'
import cpView from '@/html/cp/view'
import cpEdit from '@/html/cp/edit'

import promotionList from '@/html/display/promotion/list'
import promotionView from '@/html/display/promotion/view'
import promotionEdit from '@/html/display/promotion/edit'

import widgetList from '@/html/display/widget/list'
import widgeteditWeather from '@/html/display/widget/edit/weather'
import widgeteditSoccer from '@/html/display/widget/edit/soccer'
import widgeteditOverseassoccer from '@/html/display/widget/edit/overseassoccer'
import widgeteditBasketball from '@/html/display/widget/edit/basketball'
import widgeteditOverseasbasketball from '@/html/display/widget/edit/overseasbasketball'
import widgeteditSaying from '@/html/display/widget/edit/saying'
import widgetviewSaying from '@/html/display/widget/view/saying'

import suggestList from '@/html/display/suggest/list'
import suggestEdit from '@/html/display/suggest/edit'

import discoverList from '@/html/display/discover/list'
import discoverEdit from '@/html/display/discover/edit'
import discoverResult from '@/html/display/discover/result'

import htmlPublishing from '@/html/publishing'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // html
        // html - layout
        {
            path: '/html/common/layoutButton',
            name: 'layoutButton',
            component: layoutButton
        },
        {
            path: '/html/common/layoutCarousel',
            name: 'layoutCarousel',
            component: layoutCarousel
        },
        {
            path: '/html/common/layoutCheckbox',
            name: 'layoutCheckbox',
            component: layoutCheckbox
        },
        {
            path: '/html/common/layoutCommon',
            name: 'layoutCommon',
            component: layoutCommon
        },
        {
            path: '/html/common/layoutForm',
            name: 'layoutForm',
            component: layoutForm
        },
        {
            path: '/html/common/layoutInput',
            name: 'layoutInput',
            component: layoutInput
        },
        {
            path: '/html/common/layoutPaging',
            name: 'layoutPaging',
            component: layoutPaging
        },
        {
            path: '/html/common/layoutPicker',
            name: 'layoutPicker',
            component: layoutPicker
        },
        {
            path: '/html/common/layoutPopup',
            name: 'layoutPopup',
            component: layoutPopup
        },
        {
            path: '/html/common/layoutRadio',
            name: 'layoutRadio',
            component: layoutRadio
        },
        {
            path: '/html/common/layoutSelect',
            name: 'layoutSelect',
            component: layoutSelect
        },
        {
            path: '/html/common/layoutTable',
            name: 'layoutTable',
            component: layoutTable
        },
        {
            path: '/html/common/layoutTextarea',
            name: 'layoutTextarea',
            component: layoutTextarea
        },
        // html - contants
        {
            path: '/html/contants/category/list',
            name: 'categoryList',
            component: categoryList
        },
        {
            path: '/html/contants/line/list',
            name: 'lineList',
            component: lineList
        },
        {
            path: '/html/contants/line/edit',
            name: 'lineEdit',
            component: lineEdit
        },
        {
            path: '/html/contants/line/view',
            name: 'lineView',
            component: lineView
        },
        {
            path: '/html/contants/contants/list',
            name: 'contantsList',
            component: contantsList
        },
        {
            path: '/html/contants/contants/view',
            name: 'contantsView',
            component: contantsView
        },
        {
            path: '/html/contants/contants/editYoutube',
            name: 'contantsEditYoutube',
            component: contantsEditYoutube
        },
        {
            path: '/html/contants/contants/editAsmr',
            name: 'contantsEditAsmr',
            component: contantsEditAsmr
        },
        {
            path: '/html/contants/contants/editBasic',
            name: 'contantsEditBasic',
            component: contantsEditBasic
        },
        {
            path: '/html/contants/contants/editList',
            name: 'contantsEditList',
            component: contantsEditList
        },
        {
            path: '/html/contants/contants/editCard',
            name: 'contantsEditCard',
            component: contantsEditCard
        },
        {
            path: '/html/contants/contants/editInteractive',
            name: 'contantsEditInteractive',
            component: contantsEditInteractive
        },
        {
            path: '/html/contants/tag/list',
            name: 'tagList',
            component: tagList
        },
        {
            path: '/html/contants/search/bestList',
            name: 'searchBestList',
            component: searchBestList
        },
        {
            path: '/html/contants/search/recommList',
            name: 'searchRecommList',
            component: searchRecommList
        },
        {
            path: '/html/contants/search/relationList',
            name: 'searchRelationList',
            component: searchRelationList
        },
        {
            path: '/html/contants/search/placeholderList',
            name: 'searchplaceholderList',
            component: searchplaceholderList
        },
        {
            path: '/html/cp/list',
            name: 'cpList',
            component: cpList
        },
        {
            path: '/html/cp/view',
            name: 'cpView',
            component: cpView
        },
        {
            path: '/html/cp/edit',
            name: 'cpEdit',
            component: cpEdit
        },
        // html - display
        {
            path: '/html/display/promotion/list',
            name: 'promotionList',
            component: promotionList
        },
        {
            path: '/html/display/promotion/view',
            name: 'promotionView',
            component: promotionView
        },
        {
            path: '/html/display/promotion/edit',
            name: 'promotionEdit',
            component: promotionEdit
        },
        {
            path: '/html/display/widget/list',
            name: 'widgetList',
            component: widgetList
        },
        {
            path: '/html/display/widget/edit/weather',
            name: 'widgeteditWeather',
            component: widgeteditWeather
        },
        {
            path: '/html/display/widget/edit/soccer',
            name: 'widgeteditSoccer',
            component: widgeteditSoccer
        },
        {
            path: '/html/display/widget/edit/overseassoccer',
            name: 'widgeteditOverseassoccer',
            component: widgeteditOverseassoccer
        },
        {
            path: '/html/display/widget/edit/basketball',
            name: 'widgeteditBasketball',
            component: widgeteditBasketball
        },
        {
            path: '/html/display/widget/edit/overseasbasketball',
            name: 'widgeteditOverseasbasketball',
            component: widgeteditOverseasbasketball
        },
        {
            path: '/html/display/widget/edit/saying',
            name: 'widgeteditSaying',
            component: widgeteditSaying
        },
        {
            path: '/html/display/widget/view/saying',
            name: 'widgetviewSaying',
            component: widgetviewSaying
        },
        {
            path: '/html/display/suggest/list',
            name: 'suggestList',
            component: suggestList
        },
        {
            path: '/html/display/suggest/edit',
            name: 'suggestEdit',
            component: suggestEdit
        },
        {
            path: '/html/display/discover/list',
            name: 'discoverList',
            component: discoverList
        },
        {
            path: '/html/display/discover/edit',
            name: 'discoverEdit',
            component: discoverEdit
        },
        {
            path: '/html/display/discover/result',
            name: 'discoverResult',
            component: discoverResult
        },
        // html - event
        {
            path: '/html/event/list',
            name: 'eventList',
            component: eventList
        },
        {
            path: '/html/event/view',
            name: 'eventView',
            component: eventView
        },
        {
            path: '/html/event/edit',
            name: 'eventEdit',
            component: eventEdit
        },
        // html - member
        {
            path: '/html/member/single/list',
            name: 'singleList',
            component: singleList
        },
        {
            path: '/html/member/single/view',
            name: 'singleView',
            component: singleView
        },
        {
            path: '/html/member/group/list',
            name: 'groupList',
            component: groupList
        },
        {
            path: '/html/member/group/view',
            name: 'groupView',
            component: groupView
        },
        {
            path: '/html/member/group/edit',
            name: 'groupEdit',
            component: groupEdit
        },
        {
            path: '/html/member/comment/list',
            name: 'commentList',
            component: commentList
        },
        // html - statistics
        {
            path: '/html/statistics/member/join',
            name: 'memberJoin',
            component: memberJoin
        },
        {
            path: '/html/statistics/member/persona',
            name: 'memberPersona',
            component: memberPersona
        },
        {
            path: '/html/statistics/member/login',
            name: 'memberLogin',
            component: memberLogin
        },
        {
            path: '/html/statistics/member/secession',
            name: 'memberSecession',
            component: memberSecession
        },
        {
            path: '/html/statistics/member/cumulative',
            name: 'membeCumulative',
            component: membeCumulative
        },
        {
            path: '/html/statistics/member/service',
            name: 'membeService',
            component: membeService
        },
        {
            path: '/html/statistics/widget/use',
            name: 'widgetUse',
            component: widgetUse
        },
        {
            path: '/html/statistics/contants/ranking',
            name: 'contantsRanking',
            component: contantsRanking
        },
        {
            path: '/html/statistics/display/contents',
            name: 'displayContents',
            component: displayContents
        },
        // html - utility
        {
            path: '/html/utility/login/index',
            name: 'loginIndex',
            component: loginIndex
        },
        {
            path: '/html/utility/mypage/list',
            name: 'mypageList',
            component: mypageList
        },
        // html - service
        {
            path: '/html/service/notice/list',
            name: 'serviceNoticeList',
            component: serviceNoticeList
        },
        {
            path: '/html/service/notice/view',
            name: 'serviceNoticeView',
            component: serviceNoticeView
        },
        {
            path: '/html/service/notice/edit',
            name: 'serviceNoticeEdit',
            component: serviceNoticeEdit
        },
        {
            path: '/html/service/workout/list',
            name: 'serviceWorkoutList',
            component: serviceWorkoutList
        },
        {
            path: '/html/service/workout/view',
            name: 'serviceWorkoutView',
            component: serviceWorkoutView
        },
        {
            path: '/html/service/workout/edit',
            name: 'serviceWorkoutEdit',
            component: serviceWorkoutEdit
        },
        {
            path: '/html/service/faq/list',
            name: 'serviceFaqList',
            component: serviceFaqList
        },
        {
            path: '/html/service/faq/view',
            name: 'serviceFaqView',
            component: serviceFaqView
        },
        {
            path: '/html/service/faq/edit',
            name: 'serviceFaqEdit',
            component: serviceFaqEdit
        },
        {
            path: '/html/service/inquiry/list',
            name: 'serviceInquiryList',
            component: serviceInquiryList
        },
        {
            path: '/html/service/inquiry/view',
            name: 'serviceInquiryView',
            component: serviceInquiryView
        },
        {
            path: '/html/service/inquiry/edit',
            name: 'serviceInquiryEdit',
            component: serviceInquiryEdit
        },
        {
            path: '/html/service/terms/list',
            name: 'serviceTermsList',
            component: serviceTermsList
        },
        {
            path: '/html/service/terms/view',
            name: 'serviceTermsView',
            component: serviceTermsView
        },
        {
            path: '/html/service/terms/edit',
            name: 'serviceTermsEdit',
            component: serviceTermsEdit
        },
        {
            path: '/html/service/terms/modifiBefore',
            name: 'serviceTermsmodifiBefore',
            component: serviceTermsmodifiBefore
        },
        {
            path: '/html/service/terms/modifiAfter',
            name: 'serviceTermsmodifiAfter',
            component: serviceTermsmodifiAfter
        },
        {
            path: '/html/service/forbidden/list',
            name: 'serviceForbiddenList',
            component: serviceForbiddenList
        },
        {
            path: '/html/service/forbidden/edit',
            name: 'serviceForbiddenEdit',
            component: serviceForbiddenEdit
        },
        {
            path: '/html/service/admin/list',
            name: 'serviceAdminList',
            component: serviceAdminList
        },
        {
            path: '/html/service/admin/edit',
            name: 'serviceAdminEdit',
            component: serviceAdminEdit
        },
        {
            path: '/html/service/push/list',
            name: 'servicePushList',
            component: servicePushList
        },
        {
            path: '/html/service/push/view',
            name: 'servicePushView',
            component: servicePushView
        },
        {
            path: '/html/service/push/edit',
            name: 'servicePushEdit',
            component: servicePushEdit
        },
        {
            path: '/html/service/app/list',
            name: 'serviceAppList',
            component: serviceAppList
        },
        {
            path: '/html/service/app/edit',
            name: 'serviceAppEdit',
            component: serviceAppEdit
        },
        {
            path: '/html/publishing',
            name: 'publishing',
            component: htmlPublishing
        }
    ]
})