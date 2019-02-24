

const inter = {
    //定义状态
    state: {
        //项目编号
        projectId: 1,
        //项目分组
        projectGroup:[],
        //接口信息
        interfaceForm:{
        },

        //业务测试使用
        groupId:1,

    },
    mutations: {
        //保存项目编号
        setProjectId(state,projectId){
            state.projectId = projectId;
            localStorage.setItem('projectId',  JSON.stringify(projectId));
        },
        //保存项目下分组
        setProjectGroup(state,projectGroup){
            state.projectGroup = projectGroup;
            localStorage.setItem('projectGroup',  JSON.stringify(projectGroup));
        },

        //保存接口信息
        setInterfaceInfo(state,interfaceForm){
            state.interfaceForm = interfaceForm;
            localStorage.setItem('interfaceForm',   JSON.stringify(interfaceForm));
        },

        //保存选择分组编号
        setGroupId(state,groupId){
            state.groupId = groupId;
            localStorage.setItem('groupId',  JSON.stringify(groupId));
        },
    },
    actions: {
    }
};

export default inter;
