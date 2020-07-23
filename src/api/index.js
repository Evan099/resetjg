/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'   //非网关状态需要跨域时

// const URL = 'http://183.223.8.7'            //广域网地址
// const URL = 'http://192.168.200.101:28989'  //网关状态时请求无需跨域时  //局域网地址（李）
const URL = 'http://192.168.200.9:28989'  //网关状态时请求无需跨域时  //局域网地址(陈)
// const URL = 'http://192.168.200.220:28989'  //网关状态时请求无需跨域时  //局域网地址(王)

const URL2 = '/scjg/system'  //无需token时
const URL3 = '/scjgSystem/system'  //无需token时，(登陆使用)
const URL4 = '/scjg/api'  //需要token时
const URL5 = '/scjgSystem/api'  //需要token时


// 名优
const URL0 = '/mycp/system' // 登录前的首页  //无需token
const URL1 = '/mycp/api' //

// // 6、用户名密码登陆
// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

// 注册需要的其他接口
// 选择行业查询
export const reqRegHangye = ({}) => ajax(URL + URL2 + '/0/comment/getIndustryList', {}, 'POST')
//选择企业性质
export const reqRegCompanyNature = ({code}) => ajax(URL + URL3 + '/0/common/selectAreaCityList', {code}, 'POST')


// 【登录注册】
//1.注册
export const homeReg = ({userName, userPass, qymc, areacode, pAreaCode, lxdz, zzjgdm, fzr, tradecode, naturecode, lxr, lxrdh, mail}) => ajax(URL + URL3 + '/company/saveEnterprise', {
  userName,
  userPass,
  qymc,
  areacode,
  pAreaCode,
  lxdz,
  zzjgdm,
  fzr,
  tradecode,
  naturecode,
  lxr,
  lxrdh,
  mail
}, 'POST')
//1.登录 510000 111111
export const homeLogin = ({userName, userPwd}) => ajax(URL + URL3 + '/logins/login', {userName, userPwd}, 'POST')


//【首页】
//查询header栏目类别
export const homeHeaderList = ({}) => ajax(URL + URL3 + '/news/type', {}, 'POST')
//根据header查询header对应新闻列表
export const homeHeaderListDetails = ({newsType, pageSize, pageNum}) => ajax(URL + URL3 + '/news/list', {
  newsType,
  pageSize,
  pageNum
}, 'POST')
//根据header查询header对应新闻列表
export const homeNewsDetails = ({id}) => ajax(URL + URL3 + '/news/info', {id}, 'POST')

//菜单获取
// export const homeMenu = ({}) => ajax(URL+URL5+ '/0/resource/queryMenu', {}, 'POST')

export const homeMenu = ({}) => ajax(URL + URL5 + '/0/resource/queryMenuListByUserId', {}, 'POST')


// 2020-04-26  选择企业名称的时候load出该企业下的所有项目
export const getCompanyAllProject = ({id}) => ajax(URL + URL4 + '/0/pro/getProjectByCompanyId', {id}, 'POST')
// 2020-04-27  选中项目后load该项目下的各种信息集合
export const getCompanyOneProjectAllInfoList = ({id}) => ajax(URL + URL4 + '/0/pro/getProjectInfo', {id}, 'POST')


// 【公共】
//项目申请撤回
export const reqProjectGoBack = ({id, descr}) => ajax(URL + URL4 + '/0/pro/updateBack', {id, descr}, 'POST')

// 项目状态（行业类别(多选)dictCode=professionType ，产品类别dictCode=productType）
export const reqProjectStatus = ({dictCode}) => ajax(URL + URL5 + '/0/dict/selectDicDataNameByCode', {dictCode}, 'POST')
// 2020-3-17接口变更原因：名优多选查询由普通行业类别换为5+1行业类别

// export const reqProjectStatus = ({dictCode}) => ajax(URL + URL3 + '/0/dictSystem/selectDictTree', {dictCode}, 'POST')
//2020-4-2变更本地接口名称由reqProjectStatus更名为reqHangyeType，变更原因：技改和名优的行业查询接口存在问题
export const reqHangyeType = ({dictCode}) => ajax(URL + URL3 + '/0/dictSystem/selectDictTree', {dictCode}, 'POST')

// 项目性质
export const reqProjectNatures = ({}) => ajax(URL + URL4 + '/0/pro/projectNature', {}, 'POST')
//项目名查重(朱波)
export const checkProjectName = ({enterpriseId, name}) => ajax(URL + URL4 + '/0/pro/judgeProjectName', {
  enterpriseId,
  name
}, 'POST');
//新增基本信息（项目）（朱波）
export const SaveDraft = ({allInfo}) => ajax(URL + URL4 + '/0/pro/insertBasePro', {allInfo}, 'POST');
//新增竣工基本信息(朱波)
export const saveComplete = ({annualOutputValue, id, preProduction, projectId, periods, projectType,firstHalfYearOutput,quarterNewOutput,quarter,secondHalf}) => ajax(URL + URL4 + '/0/pro/insertOutputPro', {
  annualOutputValue,firstHalfYearOutput,quarterNewOutput,quarter,secondHalf,
  id,
  preProduction,
  projectId,
  periods,
  projectType
}, 'POST');
//新增重点基本信息(朱波)
export const important = ({importantInfo}) => ajax(URL + URL4 + '/0/pro/insertKeyPro', {importantInfo}, 'POST');
//获取用户列表（朱波）
export const getNaemeList = ({}) => ajax(URL + URL5 + '/0/role/getRoleList', {}, "POST");
//查询用户拥有的角色（朱波）
export const getuserRole = ({userId, userType,}) => ajax(URL + URL5 + '/0/userRole/getRoleByUser', {
  userId,
  userType,
}, 'POST')
//保存角色(朱波）
export const saveusers = ({userId, userType, roleId}) => ajax(URL + URL5 + "/0/userRole/saveAndUpdateUserRole", {
  userId,
  userType,
  roleId
}, 'POST')
//设置专项（朱波）
export const getSpecialList = ({id}) => ajax(URL + URL5 + '/0/userAction/queryZXAction', {id}, 'POST');
//保存专项
export const setSpecial = ({userId, zxqxAll}) => ajax(URL + URL5 + '/0/userAction/save', {userId, zxqxAll}, 'POST');
//修改重点（朱波）
export const changeZhongdian = ({keyProFundsDTO}) => ajax(URL + URL4 + '/0/pro/updateKeyProFunds', {keyProFundsDTO}, 'POST');
//修改上报(朱波）
export const modifyReport = ({id, projectStatus}) => ajax(URL + URL4 + '/0/pro/EReportPro', {id, projectStatus}, 'POST')
//填写竣工（朱波）
export const reqJuzong = ({modifyInfo}) => ajax(URL + URL4 + '/0/pro/updateOutput', {modifyInfo}, 'POST');
//饼图(朱波）
export const getPiechart = ({}) => ajax(URL + URL4 + '/0/echart/getInvest', {}, 'POST');
//饼图新(朱波)
export const getpieinfo = ({}) => ajax(URL + URL4 + '/0/echart/statisticsProStatus', {}, 'POST');
//企业饼图(朱波)
export const getQYpie = ({}) => ajax(URL + URL4 + '/0/echart/getCompanyStatusCount', {}, 'POST');
//企业柱状图（朱波）
export const getQYbar = ({}) => ajax(URL + URL4 + '/0/echart/statisticsComProNature', {}, 'POST');
export const getBarnfo = ({areaCode, year, quarter, month}) => ajax(URL + URL4 + '/0/echart/statisticsProByAreaCode', {
  areaCode,
  year,
  quarter,
  month
}, 'POST');
//项目进度统计（朱波）
export const getProjcetEchart = ({year})=>ajax(URL + URL4 + '/0/echart/getScheduleTotal',{year},'POST')
//设置权限(朱波)
export const setJurisdiction = ({id,}) => ajax(URL + URL5 + '/0/resource/queryUserResource', {id,}, 'POST');
//保存权限(朱波)
export const saveJurisdiction = ({id, resourceIds,}) => ajax(URL + URL5 + '/0/resource/saveUserResource', {
  id,
  resourceIds,
}, 'POST');
//首页竣工数据(朱波)
export const indexCompleted = ({}) => ajax(URL + URL4 + '/0/echart/getCompletionScale', {}, 'POST');
//首页重点数据（朱波）
export const indexImportant = ({}) => ajax(URL + URL4 + '/0/echart/getFundsScale', {}, 'POST');
//终审列表查询列表数据（朱波）
export const TrialPassList = ({pageSize, pageNum, pAreaCode, qymc, projcetName, declareYear, status,isKey}) => ajax(URL + URL4 + '/0/finalAudit/queryTrialPass', {
  pageSize,
  pageNum,
  pAreaCode,
  qymc,
  projcetName,
  declareYear,
  status,
  isKey
}, 'POST');
//终审保存当前页
export const saveFinal = ({finalAudits}) => ajax(URL + URL4 + '/0/finalAudit/save', {finalAudits}, 'POST');
//终审按钮获取数据
export const getAudit = ({status}) => ajax(URL + URL4 + '/0/finalAudit/getAudit', {status}, 'POST');
//终审审批完成
export const completeApproval = ({symbol, mainSendUnit, approvalTime, declareYear, status}) => ajax(URL + URL4 + '/0/finalAudit/saveFinalAudit', {
  symbol,
  mainSendUnit,
  approvalTime,
  declareYear,
  status
}, 'POST');
//撤回审批(朱波)
export const recallApproval = ({auditStatus, projectId}) => ajax(URL + URL4 + '/0/audit/saveCheHui', {
  auditStatus,
  projectId
}, 'POST')
// //导出重点项目进度表格（朱波）
// export const exportKeyExcel = ({month,year })=>ajax(URL + URL4+'/0/pro/exportKeyExcel',{month,year },'POST')
// //导出竣工项目类型表格（朱波）
// export const exportOutput = ({month,year })=>ajax(URL + URL4+'/0/pro/exportOutputExcel',{ month,year },'POST')
// //导出项目类型表格（朱波）
// export const exportTypeExcel = ({month,year})=>ajax(URL + URL4+'/0/pro/exportKeyTypeExcel',{month,year},'POST')
// 【项目列表】【新增】
//根据地区CODE或者企业名称查询企业集合
export const reqCreatProSerchCompany = ({name, areacode}) => ajax(URL + URL4 + '/0/pro/getQYByAreaCode', {
  name,
  areacode
}, 'POST')


//项目列表-申报项目(初始化数据)
export const reqCreatProFirst = ({}) => ajax(URL + URL4 + '/0/pro/insertProSkip', {}, 'POST')
//项目列表-申报项目(5+1调16+1)
export const reqCreatProSixteen = ({code}) => ajax(URL + URL4 + '/0/pro/selectTerritory', {code}, 'POST')
//项目列表-申报项目(根据企业地区code查询地区名称)
export const reqSerchArea = ({companyId}) => ajax(URL + URL4 + '/0/pro/selectAreaNameBYCompanyId', {companyId}, 'POST')

//项目列表-申报项目(提交新增重点项目)
export const reqshangbao = ({allInfo}) => ajax(URL + URL4 + '/0/pro/insertPro', {allInfo}, 'POST')
//项目列表-申报项目(提交新增重点项目)---修改时调用
export const reqshangbaoChange = ({allInfo}) => ajax(URL + URL4 + '/0/pro/updateProject', {allInfo}, 'POST')
//项目列表-申报项目(基本信息保存)
export const reqCreatProSave = ({basicInfoSubmit}) => ajax(URL + URL4 + '/0/pro/insertPro', {basicInfoSubmit}, 'POST')


// 【当年，所有项目】【当年项目type==1】【所有项目 type ==2】
export const reqBeforeProject = ({qymc, projectName, tradeCode, pAreaCode, areaCode, type, status, pageSize, pageNum, back,natureCode,declareYear,dicDataCode,isKey}) => ajax(URL + URL4 + '/0/pro/list', {
  qymc,
  projectName,
  tradeCode,
  pAreaCode,
  areaCode,
  type,
  status,
  pageSize,
  pageNum,
  back,
  natureCode,
  declareYear,
  dicDataCode,
  isKey
}, 'POST')

// 【当年，所有项目】(条件查询之行业)
// export const reqSerchChuantongHangye = ({}) => ajax(URL + URL3 + '/0/dictSystem/traditionList', {}, 'POST')

export const reqApplyGoback = ({qymc, projectName, tradeCode, pAreaCode, areaCode, type, status, pageSize, pageNum, back,natureCode,isKey}) => ajax(URL + URL4 + '/0/pro/withdrawList', {
  qymc,
  projectName,
  tradeCode,
  pAreaCode,
  areaCode,
  type,
  status,
  pageSize,
  pageNum,
  back,
  natureCode,
  isKey
}, 'POST')

// 【当年，所有项目】-查看  //竣工查看
export const reqBeforeProjectViewJungong = ({projectType, id,scheduleId,year,month,projectId}) => ajax(URL + URL4 + '/0/pro/selectOutputSchedule', {
  projectType,
  year,
  month,
  id,
  projectId,
  scheduleId
}, 'POST')
//重点查看
export const reqBeforeProjectViewZhongdian = ({projectType, id,scheduleId,year,month}) => ajax(URL + URL4 + '/0/pro/selectKeySchedule', {
  projectType,
  year,
  month,
  id,
  scheduleId
}, 'POST')
export const reqProjectInfo = ({projectType,id})=>ajax(URL + URL4 + '/0/pro/selectProInfo',{projectType,id},'POST')
// 【当年，所有项目】-删除
export const reqProjectDel = ({id}) => ajax(URL + URL4 + '/0/pro/delProject', {id}, 'POST')

// 【当年，所有项目】-点击修改-新开窗口
export const reqProjectChangeBtn = ({projectType, id}) => ajax(URL + URL4 + '/0/pro/selectUpdateProInfo', {
  projectType,
  id
}, 'POST')
// 【未审批，已审批】-查看，搜索
export const reqYWshenpi = ({astatus, id, companyName, projectTypeName, projectName, industry, proAreaCode, areaCode, projectStatus, pageNum, pageSize,natureCode,isKey}) => ajax(URL + URL4 + '/0/audit/getYearTimeProject', {
  astatus,
  id,
  companyName,
  projectTypeName,
  projectName,
  industry,
  proAreaCode,
  areaCode,
  projectStatus,
  pageNum,
  pageSize,
  natureCode,
  isKey
}, 'POST')
//【未审批，已审批】-点击审批
export const reqYWshenpibtn = ({id, projectStatus}) => ajax(URL + URL4 + '/0/audit/judgeApproval', {
  id,
  projectStatus
}, 'POST')

//【未审批，已审批】-提交审批意见
export const reqYWshenpiSubmit = ({auditOpinion, auditStatus, projectId, zxdm}) => ajax(URL + URL4 + '/0/audit/saveProAudit', {
  auditOpinion,
  auditStatus,
  projectId,
  zxdm
}, 'POST')


// 【未审批，已审批】-查看省市
export const reqShowProvice = ({code}) => ajax(URL + URL5 + '/user/selectAreaCityList', {code}, 'POST')
// 【竣工项目进度】-查看table
export const reqShowJunGong = ({pageSize, pageNum, projectName, year, quarter, projectNature, month}) => ajax(URL + URL4 + '/0/pro/completionOutPutList', {
  pageSize,
  pageNum,
  projectName,
  year,
  quarter,
  projectNature,
  month
}, 'POST')
// 【重点项目进度】-查看table
export const reqShowZhongDian = ({pageNum, pageSize, projectName, year, quarter, projectNature, month}) => ajax(URL + URL4 + '/0/pro/keyProFundsList', {
  pageNum,
  pageSize,
  projectName,
  year,
  quarter,
  projectNature,
  month
}, 'POST')


//竣工项目进度-点击填写
export const reqJungongWriteBtn = ({id, projectId}) => ajax(URL + URL4 + '/0/pro/updateOutputInfo', {
  id,
  projectId
}, 'POST')

//竣工项目进度-点击填写
export const reqZhongdianWriteBtn = ({id, projectId}) => ajax(URL + URL4 + '/0/pro/updateKeyFundsInfo', {
  id,
  projectId
}, 'POST')

//竣工项目进度-填写内容保存
export const reqJungongWriteSaveBtn = ({id, projectId, annualOutputValue, firstHalfYearOutput, newOutputValue, outputValueYear, preProduction, quarter, quarterNewOutput, remarks, secondHalf}) => ajax(URL + URL4 + '/0/pro/updateOutput', {
  id,
  projectId,
  annualOutputValue,
  firstHalfYearOutput,
  newOutputValue,
  outputValueYear,
  preProduction,
  quarter,
  quarterNewOutput,
  remarks,
  secondHalf
}, 'POST')

//重点项目进度-填写内容保存
export const reqZhongdianWriteSaveBtn = ({attractInvest, electricCostRatio, energySaving, enterpriseCapacity, enterpriseGroup, estimateNewEmploy, foreignEarn, fulfilInvestYear, fundDemand, id, implementLoans, introducedFunds, itsLocation, loanBank, planAddLand, planInvestYear, plannedLoan, proAddCapacity, proTechnicalLevel, profit, projectElectric, projectElectricComm, projectId, salesRevenue, scheduleTarget, taxes}) => ajax(URL + URL4 + '/0/pro/updateOutput', {
  attractInvest,
  electricCostRatio,
  energySaving,
  enterpriseCapacity,
  enterpriseGroup,
  estimateNewEmploy,
  foreignEarn,
  fulfilInvestYear,
  fundDemand,
  id,
  implementLoans,
  introducedFunds,
  itsLocation,
  loanBank,
  planAddLand,
  planInvestYear,
  plannedLoan,
  proAddCapacity,
  proTechnicalLevel,
  profit,
  projectElectric,
  projectElectricComm,
  projectId,
  salesRevenue,
  scheduleTarget,
  taxes
}, 'POST')


//竣工进度列表-点击审批-查询详情
export const reqJungongShenpiDetails = ({planId, status}) => ajax(URL + URL4 + '/0/pro/approveOutputInfo', {
  planId,
  status
}, 'POST')
//竣工进度列表-点击审批-确定
export const reqJungongShenpiSubmit = ({planId, approvecontent, status}) => ajax(URL + URL4 + '/0/pro/insertApproveOutput', {
  planId,
  approvecontent,
  status
}, 'POST')

//重点进度列表-点击审批-查询详情
export const reqZhongdianDetailss = ({planId, status}) => ajax(URL + URL4 + '/0/pro/approveKeyInfo', {
  planId,
  status
}, 'POST')
//重点进度列表-点击审批-确定
export const reqJungongZhongdianSubmit = ({planId, approvecontent, status}) => ajax(URL + URL4 + '/0/pro/insertApprovekey', {
  planId,
  approvecontent,
  status
}, 'POST')

//重点进度列表-竣工进度列表-点击上报
export const reqJunZhongShangbao = ({planId, planType, statusInt}) => ajax(URL + URL4 + '/0/pro/reportedSchedule', {
  planId,
  planType,
  statusInt
}, 'POST')


// 【系统管理】
//数据字典-查询父字典  and  输入框输入查询
export const reqShowFatherDic = ({keyword, pageNum, pageSize}) => ajax(URL + URL5 + '/0/dict/getDicInfoList', {
  keyword,
  pageNum,
  pageSize
}, 'POST')
//数据字典-根据父字典id查询字典详情（父字典数据、子字典数据集合）
export const reqSerchChildrenDic = ({id}) => ajax(URL + URL5 + '/0/dict/getByIdDic', {id}, 'POST')
//数据字典-根据父字典id查询字典详情（父字典数据）-修改时调用
export const reqSerchFatherDetails = ({id}) => ajax(URL + URL5 + '/0/dict/getByIdDicInfo', {id}, 'POST')
//数据字典-根据子字典id查询字典详情（子字典数据）-修改时调用
export const reqSerchChildrenDetails = ({id}) => ajax(URL + URL5 + '/0/dict/getByIdDicDataInfo', {id}, 'POST')

//数据字典-修改父字典数据
export const reqChangeFather = ({dicCode, name, id}) => ajax(URL + URL5 + '/0/dict/getByIdDicInfo', {
  dicCode,
  name,
  id
}, 'POST')
//数据字典-修改子字典数据
export const reqChangeChildren = ({dicCode, dicDataCode, name, sort, enabled, id}) => ajax(URL + URL5 + '/0/dict/updateDicDataInfo', {
  dicCode,
  dicDataCode,
  name,
  sort,
  enabled,
  id
}, 'POST')

//数据字典-新增父字典数据
export const reqInsetFather = ({dicCode, name}) => ajax(URL + URL5 + '/0/dict/saveDicInfo', {dicCode, name}, 'POST')
//数据字典-新增子字典数据
export const reqInsetChildren = ({dicCode, dicDataCode, name, sort, enabled}) => ajax(URL + URL5 + '/0/dict/saveDicDataInfo', {
  dicCode,
  dicDataCode,
  name,
  sort,
  enabled
}, 'POST')

//系统日志
// export const reqSystemLog = ({pageSize, pageNum}) => ajax(URL + URL5 + '/0/log/queryList', {pageSize, pageNum}, 'POST')
export const reqSystemLog = ({pageSize, pageNum}) => ajax(URL + URL4 + '/0/log/queryList', {pageSize, pageNum}, 'POST')
//部门管理
export const reqShowDivision = ({}) => ajax(URL + URL5 + '/0/log/queryList', {}, 'POST')

//资源管理-资源查询
export const reqResource = ({pageSize, pageNum,}) => ajax(URL + URL5 + '/0/resource/queryMenuList', {
  pageSize,
  pageNum,
}, 'POST')
//资源管理-新增
export const reqResourceAdd = ({categoryName, isMenu, name, parentId, pathUrl,}) => ajax(URL + URL5 + '/0/resource/addResource', {
  categoryName,
  isMenu,
  name,
  parentId,
  pathUrl,
}, 'POST')
//新增 资源，父级ID动态获取
export const reqResourceFutherId = ({}) => ajax(URL + URL5 + '/0/resource/queryMenu', {}, 'POST')
//角色管理-查询
export const reqRole = ({pageSize, pageNum,}) => ajax(URL + URL5 + '/0/role/getRoleList', {pageSize, pageNum,}, 'POST')
//角色管理-新增
export const reqRoleAdd = ({name, remarks,}) => ajax(URL + URL5 + '/0/role/saveRole', {name, remarks,}, 'POST')
//角色管理-修改
export const reqRoleChange = ({name, remarks, id,}) => ajax(URL + URL5 + '/0/role/updateRole', {
  name,
  remarks,
  id,
}, 'POST')
//角色管理-删除
export const reqRoleDel = ({id}) => ajax(URL + URL5 + '/0/role/deleteRole', {id}, 'POST')

//角色管理-权限设置-根据id查询数据
export const reqRoleJuris = ({roleId,}) => ajax(URL + URL5 + '/0/roleResource/getResourceRoleId', {roleId,}, 'POST')
//角色管理-权限设置-保存勾选
export const reqSaveRoleId = ({resourceIds, roleId,}) => ajax(URL + URL5 + '/0/roleResource/addRoleResource', {
  resourceIds,
  roleId,
}, 'POST')


//【用户管理】-待审核企业用户table
export const reqShowQy = ({qyStatus, pAreaCode, areaCode, natureCode, qymc, tradeCode, pageSize, pageNum}) => ajax(URL + URL5 + '/user/enterpriseList', {
  qyStatus,
  pAreaCode,
  areaCode,
  natureCode,
  qymc,
  tradeCode,
  pageSize,
  pageNum
}, 'POST')
//搜索市州下拉框
export const reqShowProvance = ({code}) => ajax(URL + URL5 + '/user/enterpriseCondition', {code}, 'POST')
//查询行业
export const reqShowHangye = ({code}) => ajax(URL + URL4 + '/0/industry/getIndustryList', {code}, 'POST')
//查询项目性质
export const reqProjctNature = ({dictCode }) => ajax(URL + URL5 + '/0/dict//selectDicDataNameByCode',{dictCode },'POST')
//查询ztree
export const reqShowZtree = ({}) => ajax(URL + URL5 + '/user/selectAreaList', {}, 'POST')
//管理用户
export const reqShowUsers = ({pageSize, pageNum, userName, departId}) => ajax(URL + URL5 + '/user/managerUserList', {
  pageSize,
  pageNum,
  userName,
  departId
}, 'POST')
//用户的禁用、启用
export const reqJQyong = ({enable, id}) => ajax(URL + URL5 + '/user/updateEnterpriseEnable', {enable, id}, 'POST')
//企业用户的删除
export const reqUserDel = ({id}) => ajax(URL + URL5 + '/user/delEnterprise', {id}, 'POST')

//用户密码的修改
export const reqUserChangePwd = ({id, pwd, type}) => ajax(URL + URL5 + '/user/updatePwd', {id, pwd, type}, 'POST')
//点击审核按钮弹出企业详情
export const reqUserShenheqiye = ({id}) => ajax(URL + URL5 + '/user/selectEnterpriseInfo', {id}, 'POST')
//点击审核-提交保存
export const reqUserShenheOkBtn = ({areacode, fzr, fzrdh, id, isShf, lxdz, lxr, lxrdh, lxrsj, mail, naturecode, qymc, tradecode, xgsj}) => ajax(URL + URL5 + '/user/saveEnterprise', {
  areacode,
  fzr,
  fzrdh,
  id,
  isShf,
  lxdz,
  lxr,
  lxrdh,
  lxrsj,
  mail,
  naturecode,
  qymc,
  tradecode,
  xgsj
}, 'POST')

//修改企业信息
export const reqChangeCompanyInfo = ({id, names, fzr, fzrdh, lxdz, lxr, lxrsj, lxrdh, mail, cz, yzbm}) => ajax(URL + URL5 + '/user/saveEnterprise', {
  id,
  names,
  fzr,
  fzrdh,
  lxdz,
  lxr,
  lxrsj,
  lxrdh,
  mail,
  cz,
  yzbm
}, 'POST')
//修改企业账户密码
export const reqChangeCompanyPwd = ({oldPwd, newPwd}) => ajax(URL + URL5 + '/user/updatePassword', {
  oldPwd,
  newPwd
}, 'POST')


//管理用户
//管理用户的删除
export const reqUserMangeDel = ({id}) => ajax(URL + URL5 + '/user/delManagerUser', {id}, 'POST')
//管理用户的修改
export const reqUserMangeDetails = ({id}) => ajax(URL + URL5 + '/user/selectManagerUserInfo', {id}, 'POST')
//管理用户的修改保存
export const reqSaveUserMangeChange = ({enabled, fzr, fzrdhid, id, isadmin, lxdz, lxr, lxrdh, lxrsj, mail, qq, sort, stateCode, trueName, fzrdh,departId,userName}) => ajax(URL + URL5 + '/user/saveManagerUser', {
  enabled,
  fzr,
  fzrdhid,
  id,
  isadmin,
  lxdz,
  lxr,
  lxrdh,
  lxrsj,
  mail,
  qq,
  sort,
  stateCode,
  trueName,
  fzrdh,
  departId,
  userName
}, 'POST')

// 【信息发布】-查询列表table
export const reqShowNews = ({newsTitle, isAudit, isShow, newsType, pageNum, pageSize}) => ajax(URL + URL5 + '/news/list', {
  newsTitle,
  isAudit,
  isShow,
  newsType,
  pageNum,
  pageSize
}, 'POST')
//添加新闻
export const reqAddNews = ({newsTitle, newsType, newsAuthor, newsSource, newsContent, fileIds, fileInfo}) => ajax(URL + URL5 + '/news/insert', {
  newsTitle,
  newsType,
  newsAuthor,
  newsSource,
  newsContent,
  fileIds,
  fileInfo
}, 'POST')
//新闻审核通过、不通过
export const reqIsShows = ({isShow, newsId, isAudit}) => ajax(URL + URL5 + '/news/audit', {
  isShow,
  newsId,
  isAudit
}, 'POST')
//新闻删除
export const reqNewsDel = ({id}) => ajax(URL + URL5 + '/news/delete', {id}, 'POST')
//新闻修改
export const reqNewsChange = ({newsTitle, newsType, newsAuthor, newsSource, newsContent, fileIds, newsId}) => ajax(URL + URL5 + '/news/update', {
  newsTitle,
  newsType,
  newsAuthor,
  newsSource,
  newsContent,
  fileIds,
  newsId
}, 'POST')


//删除附件
export const reqFujianDel = ({id}) => ajax(URL + URL5 + '/news/deleteFile', {id}, 'POST')

// 文件上传
export const reqUploadSuccess = ({uploadName, fileName, path, size}) => ajax(URL + URL5 + '/news/saveFile', {
  uploadName,
  fileName,
  path,
  size
}, 'POST')


// 【系统设置】
//pageSize
// 申报设置
export const reqProjectSet = ({spEndTime, spStartTime, startDeclareTime, endDeclareTime, unlimitedApproval, unlimitedDeclare, year, periods, zxdm,isAudit}) => ajax(URL + URL5 + '/0/declare/saveAndUpdateDeclare', {
  spEndTime,
  spStartTime,
  startDeclareTime,
  endDeclareTime,
  unlimitedApproval,
  unlimitedDeclare,
  year,
  periods,
  zxdm,
  isAudit
}, 'POST')
//进度填写设置
export const reqScheduleSetSet = ({fillInStartTime, fillInEndTime, approveStartTime, approveEndTime, unrestrictedUsers, unrestrictedApproval, year, number, projectType, zxmc,isAudit}) => ajax(URL + '/scjg/systemPro/insertSysPro', {
  fillInStartTime,
  fillInEndTime,
  approveStartTime,
  approveEndTime,
  unrestrictedUsers,
  unrestrictedApproval,
  year,
  number,
  projectType,
  zxmc,
  isAudit
}, 'POST')

// 获取专项数据
export const reqZhaunxiang = ({}) => ajax(URL + URL5 + '/0/declare/getSpecialByType', {}, 'POST')
// 专项-点击设置
export const reqZhaunxiangSet = ({year, zxdm,periods}) => ajax(URL + URL5 + '/0/declare/getDeclareByYear', {year, zxdm,periods}, 'POST')
// 进度-点击设置(不知道是否已经废弃改接口)
export const reqJinduSet = ({year, zxdm}) => ajax(URL + '/scjg/systemPro/selectNewSys', {year, zxdm}, 'POST')


// 【名优---------------------------------------------------------------------------------------------------------------------------------------------------------】

// 登陆前首页
// --获取通知公告新闻列表
// export const reqTongZhiGG = ({pageSize, pageNum}) => ajax(URL + URL0 + '/0/products/queryList', {
//   pageSize,
//   pageNum
// }, 'POST')
export const reqTongZhiGG = ({pageSize, pageNum,newsType}) => ajax(URL + URL3 +'/news/list', {
  pageSize,
  pageNum,newsType
}, 'POST')
//首页产品类型(朱波)

export const reqproductType = ({dictCode}) => ajax (URL + URL3 +'/0/dictSystem/selectDicDataNameByCode',{dictCode},'POST')


// --通知公告新闻列表详情
export const reqTongZhiGGXq = ({id}) => ajax(URL + URL0 + '/0/notifyNotice/getById', {id}, 'POST')
// --获取企业产品信息列表
export const reqProduceInfoList = ({pageSize, pageNum,type}) => ajax(URL + URL0 + '/0/products/queryList', {
  pageSize,
  pageNum,
  type
}, 'POST')

// 【企业申报】
// table列表查询
export const reqProductApplication = ({name, nature, corporation, pageSize, pageNum}) => ajax(URL + URL1 + '/0/enterprise/queryList', {
  name,
  nature,
  corporation,
  pageSize,
  pageNum
}, 'POST')
// 查询单条企业信息
export const reqGetCompanyInfo = ({id}) => ajax(URL + URL1 + '/0/enterprise/getById', {id}, 'POST')
//获取登录人企业信息
export const reqLoginPeople = ({})=>ajax(URL + URL1 +'/0/enterprise/getByLoginUser',{},'POST')
// 修改单条企业信息
export const reqChangeCompanyInfoMY = ({id, address, archivesNum, areaCode, bankCreditRating, companyIntroduction, contact, contactTel, corporation, corporationContactTel, industry, mainProduct, marketDemand, name, nature, otherDemand, registerCapital, setUpTime, technologyDemand, capitalDto, corporationPhone, contactPhone, declareYear, enterpriseCode}) => ajax(URL + URL1 + '/0/enterprise/updateEnterprise', {
  id,
  address,
  archivesNum,
  areaCode,
  bankCreditRating,
  companyIntroduction,
  contact,
  contactTel,
  corporation,
  corporationContactTel,
  industry,
  mainProduct,
  marketDemand,
  name,
  nature,
  otherDemand,
  registerCapital,
  setUpTime,
  technologyDemand,
  capitalDto,
  corporationPhone,
  contactPhone,
  declareYear,
  enterpriseCode
}, 'POST')

//新增企业信息
export const reqAddCompanyInfoMY = ({id, address, archivesNum, areaCode, bankCreditRating, companyIntroduction, contact, contactTel, corporation, corporationContactTel, industry, mainProduct, marketDemand, name, nature, otherDemand, registerCapital, setUpTime, technologyDemand, capitalDto, corporationPhone, contactPhone, declareYear, enterpriseCode,requiredMaterials,qualityStandard}) => ajax(URL + URL1 + '/0/enterprise/saveEnterprise', {
  id,
  address,
  archivesNum,
  areaCode,
  bankCreditRating,
  companyIntroduction,
  contact,

  contactTel,
  corporation,
  corporationContactTel,
  industry,
  mainProduct,
  marketDemand,
  name,
  nature,
  otherDemand,
  registerCapital,
  setUpTime,
  technologyDemand,
  capitalDto,
  corporationPhone,
  contactPhone,
  declareYear,
  enterpriseCode,
  requiredMaterials,
  qualityStandard,
}, 'POST')

// 【产品管理】
//新增产品（朱波）
// export const saveduct  = ({}) => ajax(URL + URL1 + '/0/productsAuth/saveProduct',{},'POST')
export const saveduct = ({imgDtoLists,describesCode,applicationCase,authenticationSituation,batchNum,contacts,contactsTel,declareChannel,declareYear,delFlag,describes,email,enterpriseCode,enterpriseDTO,fax,id, imgUrl,isOutsideRelease,name,officialWebsite,prizeSituation, productIntroduction,qualityStandard,requiredMaterials,status,type,qualityInspectionReportUrl}) => ajax(URL + URL1 + '/0/productsAuth/saveProduct', {imgDtoLists,applicationCase,authenticationSituation,batchNum,contacts,contactsTel,declareChannel,declareYear,delFlag,describes, email,enterpriseCode,enterpriseDTO, fax, id, imgUrl,isOutsideRelease,name,officialWebsite, prizeSituation, productIntroduction,qualityStandard,requiredMaterials,status,type,describesCode,qualityInspectionReportUrl}, 'POST')
//新增企业资金
export const reQenterpriseCapital = ({listDto})=>ajax(URL + URL1 + '/0/financialCapitala/saveCapital',{listDto},'POST')
//获取单个产品详情
export const  reqproductInfo = ({id})=>ajax(URL + URL1 + '/0/productsAuth/getById',{id},'POST')

//查询所属行业，产品类型(朱波)
export const industryProType = ({dictCode})=>ajax(URL + URL3 + '/0/dictSystem/selectDicDataNameByCode',{dictCode},'POST')
//查询所属行业，产品类型(李蟠辰修改)
export const industryProTypes = ({id}) => ajax (URL + URL3 +'/0/dictSystem/selectByDicDataTree',{id},'POST')
//产品状态(朱波)
export const producrStatus = ({})=>ajax(URL + URL1 + '/0/productsAuth/queryStatus',{},'POST')
//申报期数查询
export const reqDeclareLatest = ({id})=>ajax(URL + URL5 + '/0/declare/getDeclareLatest',{id},'POST')

// 获取产品列表//变了
// export const productList = ({status, type, descrlbes, name, pageNum, pageSize,aStatus}) => ajax(URL + URL0 + '/0/products/queryList', {
//   status,
//   type,
//   descrlbes,
//   name,
//   pageNum,
//   pageSize,
//   aStatus
// }, 'POST')
// 获取单个产品
export const productInfo = ({id}) => ajax(URL + URL0 + '/0/products/getById', {id}, 'POST')

// 【首页】
// 饼图
export const mingyouHomePieChart = ({startDate,endDate}) => ajax(URL + URL1 + '/0/statisticsData/statisticsEnterpriseNumData', {startDate,endDate}, 'POST')
//折线图
export const mingyouHomeLineChart = ({startDate,endDate}) => ajax(URL + URL1 + '/0/statisticsData/statisticsProductNumData', {startDate,endDate}, 'POST')
//柱状图
export const mingyouHomeHistogramChart = ({areaCode}) => ajax(URL + URL1 + '/0/statisticsData/statisticsByDataAreaCode', {areaCode}, 'POST')


//银行信用等级（名优的）
export const mingyouBankLevel = ({}) => ajax(URL + URL1 + '/0/enterprise/queryBackCreditList', {}, 'POST')

//所属机构
export const mingyouOrganization = ({}) => ajax(URL + URL3 + '/0/common/selectAreaList', {}, 'POST')


// 【产品列表】
// （当年，所有，当年未审批，当年已审批）
export const reqSerchTableBABBaBna = ({aStatus,status,companyName,name,describesCode,pageSize,pageNum ,declareYear,declareYearE,checkListNature,checkListIndustry,checkListAreacode}) => ajax(URL + URL1 + '/0/productsAuth/queryList', {aStatus,status,companyName,name,describesCode,pageNum,pageSize,declareYear,declareYearE,checkListNature,checkListIndustry,checkListAreacode}, 'POST')
// （最终审批，最终通过）
export const reqFinalApproveOrFinalPass = ({judgeNum,companyName,name,describesCode,startTime,endTime,checkListNature,checkListIndustry,checkListAreacode,pageSize, pageNum}) => ajax(URL + URL1 + '/0/auditDetail/productFinal', {judgeNum,companyName,name,describesCode,startTime,endTime,checkListNature,checkListIndustry,checkListAreacode,pageSize, pageNum}, 'POST')
//最终审批保存当前页（朱波）
export const saveMYPage = ({finalAudits}) => ajax(URL + URL1 + '/0/auditDetail/saveAuditFinal', {finalAudits}, 'POST')
//最终审批(朱波)
export const FinalApproval = ({batchNum,declareYear })=>ajax(URL + URL1 + '/0/auditDetail/getAuditData',{batchNum,declareYear },'POST')
//更新文号(朱波)
export const updateSymbol = ({declareYear,symbol})=>ajax(URL + URL1 + '/0/auditDetail/updateSymbol',{declareYear,symbol},'POST')
//产品上报（朱波）
export const productReport = ({id})=>ajax(URL + URL1 + '/0/productsAuth/reportingState',{id},'POST');




//产品状态
export const reqSerchTableProductStatus = ({aStatus}) => ajax(URL + URL1 + '/0/productsAuth/queryStatus', {aStatus}, 'POST')
//当年未审批产品，当年已审批产品，点击审批时查看是否能审批
export const reqBeforeAllshenpi = ({id,status}) => ajax(URL + URL1 + '/0/auditDetail/judgeProduct', {id,status}, 'POST')
//当年未审批产品，当年已审批产品,审批意见提交
export const reqBeforeAllshenpiSubmit = ({auditId,auditStatus,remarks}) => ajax(URL + URL1 + '/0/auditDetail/saveAuditDetail', {auditId,auditStatus,remarks}, 'POST')
//查询产品信息
export const reqBeforeAllProductInfoId = ({id}) => ajax(URL + URL1 + '/0/productsAuth/getById', {id}, 'POST')


//产品对接列表（yu)
export const reqProductButt = ({judgeNum,companyName,name,describesCode,status,pageSize, pageNum,type,startTime,endTime}) => ajax(URL + URL1 + '/0/auditDetail/productFinal', {judgeNum,companyName,name,describesCode,status,pageSize, pageNum,type,startTime,endTime}, 'POST')
//登录页面产品详情（yu）
export const reqProductInfo = ({id}) => ajax(URL + URL0 + '/0/products/selectById', {id}, 'POST')

// 产品对接（提交对接问题）
export const reqProductButtSubmitProblem = ({productId,dockingQuestion}) => ajax(URL + URL1 + '/0/dockingRecord/saveDocking', {productId,dockingQuestion}, 'POST')
// 产品对接（查询对接问题）
export const reqProductButtSerchProblem = ({productId,pageSize,pageNum}) => ajax(URL + URL1 + '/0/dockingRecord/queryList', {productId,pageSize,pageNum}, 'POST')
// 产品对接（关闭对接问题）
export const reqProductButtCloseProblem = ({id}) => ajax(URL + URL1 + '/0/dockingRecord/closeDocking', {id}, 'POST')
// 产品对接（获取对接问题的对话）
export const reqProductButtProblemsSessonInfo = ({questionRecordId}) => ajax(URL + URL1 + '/0/productButtJoint/queryList', {questionRecordId}, 'POST')
// 产品对接（回复对话）
export const reqProductButtProblemsReplay = ({parentId,questionRecordId,contents}) => ajax(URL + URL1 + '/0/productButtJoint/saveProductButtJoint', {parentId,questionRecordId,contents}, 'POST')



// 名优附件上传设置
//添加附件设置
export const reqAddAccessory = ({serialNumber,settingYear,name,isRequired,id,bachNum,contents}) => ajax(URL + URL5 + '/0/accessoriesde/setting/saveOrUpdateSetting', {serialNumber,settingYear,name,isRequired,id,bachNum,contents}, 'POST')
//查询附件设置
export const reqSelectAccessory = ({settingYear,bachNum}) => ajax(URL + URL5 + '/0/accessoriesde/info/querySettingList', {settingYear,bachNum}, 'POST')
//根据id删除附件设置
export const reqDelAccessory = ({id}) => ajax(URL + URL5 + '/0/accessoriesde/info/deleteBySettingId', {id}, 'POST')



//查询登录用户的附件信息
export const reqSelectAccessoryInfo = ({recordId}) => ajax(URL + URL5 + '/0/accessoriesde/info/queryInfoByLoginDoc', {recordId}, 'POST')
//保存附件信息
export const reqSaveAccessoryInfo = ({id,serialNumber,settingName,isRequired,recordId,accessoriesdeName,accessoriesdePath,accessoriesdeSize }) => ajax(URL + URL5 + '/0/accessoriesde/info/saveOrUpdateInfo', {id,serialNumber,settingName,isRequired,recordId,accessoriesdeName,accessoriesdePath,accessoriesdeSize}, 'POST')
//根据id删除附件信息
export const reqDelAccessoryInfo = ({id}) => ajax(URL + URL5 + '/0/accessoriesde/info/deleteById', {id}, 'POST')


//删除产品附件2019/9/27
export const reqDelMyImg = ({id}) => ajax(URL + URL1 + '/0/productsAuth/deleteProductFile', {id}, 'POST')
//删除产品信息2019/10/16
export const reqDelProduct = ({id}) => ajax(URL + URL1 + '/0/productsAuth/deleteProduct', {id}, 'POST')
