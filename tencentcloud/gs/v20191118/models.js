/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * DescribeWorkers返回参数结构体
 * @class
 */
class DescribeWorkersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空闲机器总数量
         * @type {number || null}
         */
        this.Idle = null;

        /**
         * 区域个数
         * @type {number || null}
         */
        this.RegionNum = null;

        /**
         * 各个区域的机器情况
         * @type {Array.<WorkerRegionInfo> || null}
         */
        this.RegionDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Idle = 'Idle' in params ? params.Idle : null;
        this.RegionNum = 'RegionNum' in params ? params.RegionNum : null;

        if (params.RegionDetail) {
            this.RegionDetail = new Array();
            for (let z in params.RegionDetail) {
                let obj = new WorkerRegionInfo();
                obj.deserialize(params.RegionDetail[z]);
                this.RegionDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * worker的区域信息
 * @class
 */
class WorkerRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 该区域空闲机器数量
         * @type {number || null}
         */
        this.Idle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Idle = 'Idle' in params ? params.Idle : null;

    }
}

/**
 * TrylockWorker返回参数结构体
 * @class
 */
class TrylockWorkerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopGame请求参数结构体
 * @class
 */
class StopGameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏用户ID
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * StopGame返回参数结构体
 * @class
 */
class StopGameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSession返回参数结构体
 * @class
 */
class CreateSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务端session信息，返回给JSSDK
         * @type {string || null}
         */
        this.ServerSession = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerSession = 'ServerSession' in params ? params.ServerSession : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TrylockWorker请求参数结构体
 * @class
 */
class TrylockWorkerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 资源池编号，1表示共用，2表示测试
         * @type {number || null}
         */
        this.SetNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.SetNo = 'SetNo' in params ? params.SetNo : null;

    }
}

/**
 * CreateSession请求参数结构体
 * @class
 */
class CreateSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端session信息，从JSSDK请求中获得
         * @type {string || null}
         */
        this.ClientSession = null;

        /**
         * 游戏用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 游戏区域
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 游戏参数
         * @type {string || null}
         */
        this.GameParas = null;

        /**
         * 分辨率
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 背景图url
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 资源池编号
         * @type {number || null}
         */
        this.SetNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.GameParas = 'GameParas' in params ? params.GameParas : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.SetNo = 'SetNo' in params ? params.SetNo : null;

    }
}

/**
 * DescribeWorkers请求参数结构体
 * @class
 */
class DescribeWorkersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源池编号，值为2的幂，1表示共用，2表示测试
         * @type {number || null}
         */
        this.SetNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SetNo = 'SetNo' in params ? params.SetNo : null;

    }
}

module.exports = {
    DescribeWorkersResponse: DescribeWorkersResponse,
    WorkerRegionInfo: WorkerRegionInfo,
    TrylockWorkerResponse: TrylockWorkerResponse,
    StopGameRequest: StopGameRequest,
    StopGameResponse: StopGameResponse,
    CreateSessionResponse: CreateSessionResponse,
    TrylockWorkerRequest: TrylockWorkerRequest,
    CreateSessionRequest: CreateSessionRequest,
    DescribeWorkersRequest: DescribeWorkersRequest,

}