import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySampleSnapshotTemplateResponse, ModifyWatermarkTemplateRequest, DescribeAllClassRequest, WeChatMiniProgramPublishRequest, CreateTranscodeTemplateRequest, DescribeAnimatedGraphicsTemplatesRequest, LiveRealTimeClipResponse, DeleteAnimatedGraphicsTemplateResponse, CreateImageProcessingTemplateRequest, ModifySampleSnapshotTemplateRequest, CreateImageSpriteTemplateRequest, DeleteAIRecognitionTemplateResponse, DeleteContentReviewTemplateRequest, ResetProcedureTemplateRequest, ComposeMediaResponse, DeleteSampleSnapshotTemplateRequest, DescribeStorageDataResponse, ModifySubAppIdInfoRequest, DeletePersonSampleRequest, ExecuteFunctionResponse, ComposeMediaRequest, CreateAdaptiveDynamicStreamingTemplateRequest, PushUrlCacheResponse, ModifyTranscodeTemplateRequest, DeleteAIAnalysisTemplateResponse, DeleteImageProcessingTemplateRequest, ApplyUploadResponse, DeleteSuperPlayerConfigRequest, CreateProcedureTemplateRequest, DescribeMediaProcessUsageDataRequest, CreatePersonSampleRequest, ModifySuperPlayerConfigResponse, DeleteAIRecognitionTemplateRequest, DescribeWordSamplesResponse, ForbidMediaDistributionRequest, DescribeAIRecognitionTemplatesResponse, EditMediaResponse, ProcessMediaByUrlRequest, ModifyMediaInfoRequest, DeleteTranscodeTemplateRequest, DescribeSnapshotByTimeOffsetTemplatesRequest, ProcessMediaByProcedureRequest, ProcessMediaResponse, CreateWordSamplesResponse, DeleteAdaptiveDynamicStreamingTemplateResponse, CreateWordSamplesRequest, ModifyAnimatedGraphicsTemplateResponse, ModifyAIAnalysisTemplateResponse, LiveRealTimeClipRequest, DeleteAdaptiveDynamicStreamingTemplateRequest, SimpleHlsClipResponse, DeleteAIAnalysisTemplateRequest, EditMediaRequest, DescribeMediaInfosResponse, DeleteProcedureTemplateResponse, DescribeAdaptiveDynamicStreamingTemplatesResponse, ForbidMediaDistributionResponse, DescribeAdaptiveDynamicStreamingTemplatesRequest, CreatePersonSampleResponse, CreateContentReviewTemplateResponse, ModifyAnimatedGraphicsTemplateRequest, DescribeProcedureTemplatesRequest, DeleteWordSamplesRequest, ModifyContentReviewTemplateResponse, DescribeWatermarkTemplatesRequest, CreateSuperPlayerConfigResponse, ModifyAdaptiveDynamicStreamingTemplateRequest, DescribeCDNUsageDataResponse, ModifyWordSampleRequest, DeleteMediaResponse, ModifySnapshotByTimeOffsetTemplateResponse, SearchMediaResponse, ProcessMediaRequest, ModifyMediaInfoResponse, ModifyAdaptiveDynamicStreamingTemplateResponse, DeleteMediaRequest, CreateSuperPlayerConfigRequest, ModifySubAppIdInfoResponse, ModifySubAppIdStatusResponse, SimpleHlsClipRequest, DescribeSuperPlayerConfigsResponse, DescribeStorageDataRequest, DeleteImageSpriteTemplateResponse, DescribeContentReviewTemplatesResponse, DescribeEventsStateResponse, ModifyImageSpriteTemplateResponse, CreateWatermarkTemplateRequest, DescribeEventsStateRequest, CreateImageProcessingTemplateResponse, DescribeImageSpriteTemplatesRequest, ConfirmEventsRequest, CreateAIRecognitionTemplateResponse, ModifySubAppIdStatusRequest, CreateSubAppIdResponse, CreateWatermarkTemplateResponse, DescribeImageProcessingTemplatesRequest, ResetProcedureTemplateResponse, DescribeAIAnalysisTemplatesRequest, ParseStreamingManifestRequest, DeleteSampleSnapshotTemplateResponse, DescribeStorageDetailsResponse, PullEventsResponse, DescribeCdnLogsRequest, ProcessMediaByUrlResponse, DescribeCdnLogsResponse, DescribeTaskDetailResponse, DeletePersonSampleResponse, CreateSnapshotByTimeOffsetTemplateResponse, ModifyContentReviewTemplateRequest, CreateAdaptiveDynamicStreamingTemplateResponse, ParseStreamingManifestResponse, ApplyUploadRequest, CreateSampleSnapshotTemplateResponse, DeleteContentReviewTemplateResponse, PullUploadRequest, DescribeCDNUsageDataRequest, DescribeReviewDetailsRequest, CreateClassResponse, DeleteSuperPlayerConfigResponse, DescribeSampleSnapshotTemplatesRequest, ModifyAIRecognitionTemplateRequest, PushUrlCacheRequest, CreateAIAnalysisTemplateResponse, ModifyClassRequest, DescribeMediaInfosRequest, ModifyPersonSampleRequest, CreateAIRecognitionTemplateRequest, DescribeTaskDetailRequest, ModifyAIRecognitionTemplateResponse, DeleteWordSamplesResponse, DeleteProcedureTemplateRequest, DeleteClassResponse, ModifyTranscodeTemplateResponse, DescribeSubAppIdsResponse, CreateContentReviewTemplateRequest, DescribeContentReviewTemplatesRequest, DescribeImageSpriteTemplatesResponse, DeleteImageSpriteTemplateRequest, CreateClassRequest, CreateProcedureTemplateResponse, DescribeMediaProcessUsageDataResponse, DescribeSuperPlayerConfigsRequest, DescribeTasksResponse, DescribeSubAppIdsRequest, ModifySnapshotByTimeOffsetTemplateRequest, ModifySuperPlayerConfigRequest, DescribeSnapshotByTimeOffsetTemplatesResponse, DeleteSnapshotByTimeOffsetTemplateResponse, DescribeTasksRequest, DescribeReviewDetailsResponse, CreateTranscodeTemplateResponse, CreateAIAnalysisTemplateRequest, DescribeAllClassResponse, ModifyImageSpriteTemplateRequest, DeleteWatermarkTemplateRequest, DescribeWordSamplesRequest, ModifyAIAnalysisTemplateRequest, CommitUploadResponse, DescribeSampleSnapshotTemplatesResponse, ModifyWordSampleResponse, DeleteClassRequest, DescribeTranscodeTemplatesRequest, DescribeWatermarkTemplatesResponse, WeChatMiniProgramPublishResponse, CreateAnimatedGraphicsTemplateRequest, ExecuteFunctionRequest, ConfirmEventsResponse, ModifyPersonSampleResponse, DeleteTranscodeTemplateResponse, DescribePersonSamplesResponse, PullEventsRequest, DescribeAIAnalysisTemplatesResponse, CreateSnapshotByTimeOffsetTemplateRequest, CreateSubAppIdRequest, DescribeProcedureTemplatesResponse, SearchMediaRequest, CreateSampleSnapshotTemplateRequest, ModifyClassResponse, ProcessMediaByProcedureResponse, PullUploadResponse, DeleteImageProcessingTemplateResponse, CommitUploadRequest, DescribeTranscodeTemplatesResponse, DeleteAnimatedGraphicsTemplateRequest, DeleteSnapshotByTimeOffsetTemplateRequest, DescribeAnimatedGraphicsTemplatesResponse, DescribeImageProcessingTemplatesResponse, CreateAnimatedGraphicsTemplateResponse, DescribePersonSamplesRequest, DescribeStorageDetailsRequest, DeleteWatermarkTemplateResponse, CreateImageSpriteTemplateResponse, DescribeAIRecognitionTemplatesRequest, ModifyWatermarkTemplateResponse } from "./vod_models";
/**
 * vod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建一个用户自定义的图片处理模板，数量上限：16。最多支持三次操作，例如：裁剪-缩略-裁剪。
     */
    CreateImageProcessingTemplate(req: CreateImageProcessingTemplateRequest, cb?: (error: string, rep: CreateImageProcessingTemplateResponse) => void): Promise<CreateImageProcessingTemplateResponse>;
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     */
    CreateSnapshotByTimeOffsetTemplate(req: CreateSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: CreateSnapshotByTimeOffsetTemplateResponse) => void): Promise<CreateSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对点播中的一个文件进行剪辑，生成一个新的视频；
2. 对点播中的多个文件进行拼接，生成一个新的视频；
3. 对点播中的多个文件进行剪辑，然后再拼接，生成一个新的视频；
4. 对点播中的一个流，直接生成一个新的视频；
5. 对点播中的一个流进行剪辑，生成一个新的视频；
6. 对点播中的多个流进行拼接，生成一个新的视频；
7. 对点播中的多个流进行剪辑，然后拼接，生成一个新的视频。

对于生成的新视频，还可以指定生成后的视频是否要执行任务流。

>当对直播流做剪辑、拼接等操作时，请确保流结束后再操作。否则生成的视频可能不完整。

如使用事件通知，事件通知的类型为 [视频编辑完成](https://cloud.tencent.com/document/product/266/33794)。
     */
    EditMedia(req: EditMediaRequest, cb?: (error: string, rep: EditMediaResponse) => void): Promise<EditMediaResponse>;
    /**
     * * 我们强烈建议您使用云点播提供的 [服务端上传 SDK](/document/product/266/9759#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) 来上传文件。直接调用 API 进行上传的难度和工作量都显著大于使用 SDK。
* 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考 [服务端上传综述](/document/product/266/9759)。
     */
    ApplyUpload(req: ApplyUploadRequest, cb?: (error: string, rep: ApplyUploadResponse) => void): Promise<ApplyUploadResponse>;
    /**
     * 删除用户自定义转动图模板。
     */
    DeleteAnimatedGraphicsTemplate(req: DeleteAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: DeleteAnimatedGraphicsTemplateResponse) => void): Promise<DeleteAnimatedGraphicsTemplateResponse>;
    /**
     * 根据视频内容分析模板唯一标识，获取视频内容分析模板详情列表。返回结果包含符合条件的所有用户自定义视频内容分析模板及[系统预置视频内容分析模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF)。
     */
    DescribeAIAnalysisTemplates(req: DescribeAIAnalysisTemplatesRequest, cb?: (error: string, rep: DescribeAIAnalysisTemplatesResponse) => void): Promise<DescribeAIAnalysisTemplatesResponse>;
    /**
     * * 该接口用于业务服务器以 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 的方式获取事件通知；
* 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
* 请求最多挂起5秒，建议请求方将超时时间设置为10秒；
* 若该接口有事件返回，调用方必须在<font color="red">30秒</font>内调用 [确认事件通知](https://cloud.tencent.com/document/product/266/33434) 接口，确认事件通知已经处理，否则该事件通知在<font color="red">30秒</font>后会再次被拉取到。
     */
    PullEvents(req: PullEventsRequest, cb?: (error: string, rep: PullEventsResponse) => void): Promise<PullEventsResponse>;
    /**
     * 使用任务流模板，对点播中的视频发起处理任务。
有两种方式创建任务流模板：
1. 在控制台上创建和修改任务流模板；
2. 通过任务流模板接口创建任务流模板。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     */
    ProcessMediaByProcedure(req: ProcessMediaByProcedureRequest, cb?: (error: string, rep: ProcessMediaByProcedureResponse) => void): Promise<ProcessMediaByProcedureResponse>;
    /**
     * 删除用户自定义转码模板。
     */
    DeleteTranscodeTemplate(req: DeleteTranscodeTemplateRequest, cb?: (error: string, rep: DeleteTranscodeTemplateResponse) => void): Promise<DeleteTranscodeTemplateResponse>;
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * <b>本接口已不推荐使用，用 [DescribeMediaProcessUsageData](/document/product/266/41464) 替代</b>

该接口返回查询时间范围内每天使用的视频内容审核时长数据，单位： 秒。

1. 可以查询最近365天内的视频内容审核时长统计数据。
2. 查询时间跨度不超过90天。
     */
    DescribeReviewDetails(req: DescribeReviewDetailsRequest, cb?: (error: string, rep: DescribeReviewDetailsResponse) => void): Promise<DescribeReviewDetailsResponse>;
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     */
    DescribeWordSamples(req: DescribeWordSamplesRequest, cb?: (error: string, rep: DescribeWordSamplesResponse) => void): Promise<DescribeWordSamplesResponse>;
    /**
     * 查询存储空间使用情况和文件数量。
     */
    DescribeStorageData(req: DescribeStorageDataRequest, cb?: (error: string, rep: DescribeStorageDataResponse) => void): Promise<DescribeStorageDataResponse>;
    /**
     * 修改用户自定义视频内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     */
    ModifyAIAnalysisTemplate(req: ModifyAIAnalysisTemplateRequest, cb?: (error: string, rep: ModifyAIAnalysisTemplateResponse) => void): Promise<ModifyAIAnalysisTemplateResponse>;
    /**
     * 删除用户自定义的任务流模板。
     */
    DeleteProcedureTemplate(req: DeleteProcedureTemplateRequest, cb?: (error: string, rep: DeleteProcedureTemplateResponse) => void): Promise<DeleteProcedureTemplateResponse>;
    /**
     * 删除转自适应码流模板
     */
    DeleteAdaptiveDynamicStreamingTemplate(req: DeleteAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: DeleteAdaptiveDynamicStreamingTemplateResponse) => void): Promise<DeleteAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 创建转自适应码流模板，数量上限：100。
     */
    CreateAdaptiveDynamicStreamingTemplate(req: CreateAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: CreateAdaptiveDynamicStreamingTemplateResponse) => void): Promise<CreateAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     */
    DescribeSampleSnapshotTemplates(req: DescribeSampleSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeSampleSnapshotTemplatesResponse) => void): Promise<DescribeSampleSnapshotTemplatesResponse>;
    /**
     * 删除用户自定义指定时间点截图模板。
     */
    DeleteSnapshotByTimeOffsetTemplate(req: DeleteSnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: DeleteSnapshotByTimeOffsetTemplateResponse) => void): Promise<DeleteSnapshotByTimeOffsetTemplateResponse>;
    /**
     * 查询点播域名的 CDN 访问日志的下载链接。
    1. 可以查询最近30天内的 CDN 日志下载链接。
    2. 默认情况下 CDN 每小时生成一个日志文件，如果某一个小时没有 CDN 访问，不会生成日志文件。
    3. CDN 日志下载链接的有效期为24小时。
     */
    DescribeCdnLogs(req: DescribeCdnLogsRequest, cb?: (error: string, rep: DescribeCdnLogsResponse) => void): Promise<DescribeCdnLogsResponse>;
    /**
     * 修改媒体分类属性。
     */
    ModifyClass(req: ModifyClassRequest, cb?: (error: string, rep: ModifyClassResponse) => void): Promise<ModifyClassResponse>;
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 重新设置用户自定义任务流模板的内容。
     */
    ResetProcedureTemplate(req: ResetProcedureTemplateRequest, cb?: (error: string, rep: ResetProcedureTemplateResponse) => void): Promise<ResetProcedureTemplateResponse>;
    /**
     * 该接口用于查询点播 CDN 的流量、带宽等统计数据。
   1. 可以查询最近365天内的 CDN 用量数据。
   2.  查询时间跨度不超过90天。
   3. 可以指定用量数据的时间粒度，支持5分钟、1小时、1天的时间粒度。
   4.  流量为查询时间粒度内的总流量，带宽为查询时间粒度内的峰值带宽。
     */
    DescribeCDNUsageData(req: DescribeCDNUsageDataRequest, cb?: (error: string, rep: DescribeCDNUsageDataResponse) => void): Promise<DescribeCDNUsageDataResponse>;
    /**
     * 创建用户自定义转码模板，数量上限：100。
     */
    CreateTranscodeTemplate(req: CreateTranscodeTemplateRequest, cb?: (error: string, rep: CreateTranscodeTemplateResponse) => void): Promise<CreateTranscodeTemplateResponse>;
    /**
     * 修改用户自定义雪碧图模板。
     */
    ModifyImageSpriteTemplate(req: ModifyImageSpriteTemplateRequest, cb?: (error: string, rep: ModifyImageSpriteTemplateResponse) => void): Promise<ModifyImageSpriteTemplateResponse>;
    /**
     * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
* 否则，请先执行[删除媒体](/document/product/266/31764)及子分类，再删除该分类；
     */
    DeleteClass(req: DeleteClassRequest, cb?: (error: string, rep: DeleteClassResponse) => void): Promise<DeleteClassResponse>;
    /**
     * 本接口仅用于定制开发的特殊场景，除非云点播客服人员主动告知您需要使用本接口，其它情况请勿调用。
     */
    ExecuteFunction(req: ExecuteFunctionRequest, cb?: (error: string, rep: ExecuteFunctionResponse) => void): Promise<ExecuteFunctionResponse>;
    /**
     * 该接口返回查询时间范围内每天使用的视频处理用量信息。
   1. 可以查询最近365天内的视频处理统计数据。
   2. 查询时间跨度不超过90天。
     */
    DescribeMediaProcessUsageData(req: DescribeMediaProcessUsageDataRequest, cb?: (error: string, rep: DescribeMediaProcessUsageDataResponse) => void): Promise<DescribeMediaProcessUsageDataResponse>;
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     */
    DescribeSnapshotByTimeOffsetTemplates(req: DescribeSnapshotByTimeOffsetTemplatesRequest, cb?: (error: string, rep: DescribeSnapshotByTimeOffsetTemplatesResponse) => void): Promise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
    /**
     * 该接口用于制作媒体文件，可以

1. 对一个媒体文件进行剪辑，生成一个新的媒体文件；
2. 对多个媒体文件进行裁剪拼接，生成一个新的媒体文件；
3. 对多个媒体文件的媒体流进行裁剪拼接，生成一个新的媒体文件。

如使用事件通知，事件通知的类型为 [视频合成完成](https://cloud.tencent.com/document/product/266/43000)。
     */
    ComposeMedia(req: ComposeMediaRequest, cb?: (error: string, rep: ComposeMediaResponse) => void): Promise<ComposeMediaResponse>;
    /**
     * 创建用户自定义视频内容审核模板，数量上限：50。
     */
    CreateContentReviewTemplate(req: CreateContentReviewTemplateRequest, cb?: (error: string, rep: CreateContentReviewTemplateResponse) => void): Promise<CreateContentReviewTemplateResponse>;
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     */
    CreateSampleSnapshotTemplate(req: CreateSampleSnapshotTemplateRequest, cb?: (error: string, rep: CreateSampleSnapshotTemplateResponse) => void): Promise<CreateSampleSnapshotTemplateResponse>;
    /**
     * 删除用户自定义视频内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     */
    DeleteAIAnalysisTemplate(req: DeleteAIAnalysisTemplateRequest, cb?: (error: string, rep: DeleteAIAnalysisTemplateResponse) => void): Promise<DeleteAIAnalysisTemplateResponse>;
    /**
     * 1. 该接口可以获取多个媒体文件的多种信息，包括：
    1. 基础信息（basicInfo）：包括媒体名称、分类、播放地址、封面图片等。
    2. 元信息（metaData）：包括大小、时长、视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该媒体转码生成的各种规格的媒体地址、视频流参数、音频流参数等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后的动图信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后的截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图后的雪碧图信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，的截图信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的打点信息。
    9. 转自适应码流信息（adaptiveDynamicStreamingInfo）：包括规格、加密类型、打包格式等相关信息。
2. 可以指定回包只返回部分信息。
     */
    DescribeMediaInfos(req: DescribeMediaInfosRequest, cb?: (error: string, rep: DescribeMediaInfosResponse) => void): Promise<DescribeMediaInfosResponse>;
    /**
     * 直播即时剪辑，是指在直播过程中（即直播尚未结束时），客户可以在过往直播内容中选择一段，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种即时剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段**长久保存**的场景；
- 剪辑不固化：剪辑得到的视频附属于直播录制文件，没有独立 FileId；适用于将精彩片段**临时分享**的场景。

注意：
- 使用直播即时剪辑功能的前提是：目标直播流开启了[时移回看](https://cloud.tencent.com/document/product/267/32742)功能。
- 直播即时剪辑是基于直播录制生成的 m3u8 文件进行的，故而其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。


### 剪辑固化
所谓剪辑固化，是指将剪辑出来的视频是保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始直播录制视频影响（即使原始录制视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，直播录制出来的原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于直播即时剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择直播即时剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始录制视频相互独立，可以独立管理、长久保存。

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与直播录制视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与直播录制的完整视频有效期是一致的。一旦直播录制出来的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。
     */
    LiveRealTimeClip(req: LiveRealTimeClipRequest, cb?: (error: string, rep: LiveRealTimeClipResponse) => void): Promise<LiveRealTimeClipResponse>;
    /**
     * 该接口用于将一个网络上的视频拉取到云点播平台。
     */
    PullUpload(req: PullUploadRequest, cb?: (error: string, rep: PullUploadResponse) => void): Promise<PullUploadResponse>;
    /**
     * 修改用户自定义采样截图模板。
     */
    ModifySampleSnapshotTemplate(req: ModifySampleSnapshotTemplateRequest, cb?: (error: string, rep: ModifySampleSnapshotTemplateResponse) => void): Promise<ModifySampleSnapshotTemplateResponse>;
    /**
     * 删除超级播放器配置。
*注：系统预置播放器配置不允许删除。*
     */
    DeleteSuperPlayerConfig(req: DeleteSuperPlayerConfigRequest, cb?: (error: string, rep: DeleteSuperPlayerConfigResponse) => void): Promise<DeleteSuperPlayerConfigResponse>;
    /**
     * 根据任务流模板名字，获取任务流模板详情列表。
     */
    DescribeProcedureTemplates(req: DescribeProcedureTemplatesRequest, cb?: (error: string, rep: DescribeProcedureTemplatesResponse) => void): Promise<DescribeProcedureTemplatesResponse>;
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     */
    DescribeTranscodeTemplates(req: DescribeTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeTranscodeTemplatesResponse) => void): Promise<DescribeTranscodeTemplatesResponse>;
    /**
     * 上传 HLS 视频时，解析索引文件内容，返回待上传的分片文件列表。分片文件路径必须是当前目录或子目录的相对路径，不能是 URL，不能是绝对路径。
     */
    ParseStreamingManifest(req: ParseStreamingManifestRequest, cb?: (error: string, rep: ParseStreamingManifestResponse) => void): Promise<ParseStreamingManifestResponse>;
    /**
     * 创建用户自定义的任务流模板，模板上限：50。
     */
    CreateProcedureTemplate(req: CreateProcedureTemplateRequest, cb?: (error: string, rep: CreateProcedureTemplateResponse) => void): Promise<CreateProcedureTemplateResponse>;
    /**
     * 1. 预热指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
     */
    PushUrlCache(req: PushUrlCacheRequest, cb?: (error: string, rep: PushUrlCacheResponse) => void): Promise<PushUrlCacheResponse>;
    /**
     * * 删除媒体及其对应的视频处理文件（如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的转码，或者微信发布文件；
     */
    DeleteMedia(req: DeleteMediaRequest, cb?: (error: string, rep: DeleteMediaResponse) => void): Promise<DeleteMediaResponse>;
    /**
     * 创建超级播放器配置，数量上限：100。
     */
    CreateSuperPlayerConfig(req: CreateSuperPlayerConfigRequest, cb?: (error: string, rep: CreateSuperPlayerConfigResponse) => void): Promise<CreateSuperPlayerConfigResponse>;
    /**
     * 该接口用于根据人物 ID，修改人物样本信息，包括名称、描述的修改，以及人脸、标签的添加、删除、重置操作。人脸删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     */
    ModifyPersonSample(req: ModifyPersonSampleRequest, cb?: (error: string, rep: ModifyPersonSampleResponse) => void): Promise<ModifyPersonSampleResponse>;
    /**
     * 删除用户自定义视频内容审核模板。
     */
    DeleteContentReviewTemplate(req: DeleteContentReviewTemplateRequest, cb?: (error: string, rep: DeleteContentReviewTemplateResponse) => void): Promise<DeleteContentReviewTemplateResponse>;
    /**
     * 创建用户自定义视频内容分析模板，数量上限：50。
     */
    CreateAIAnalysisTemplate(req: CreateAIAnalysisTemplateRequest, cb?: (error: string, rep: CreateAIAnalysisTemplateResponse) => void): Promise<CreateAIAnalysisTemplateResponse>;
    /**
     * * 该接口用于业务服务器获取 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 事件通知的状态。

     */
    DescribeEventsState(req: DescribeEventsStateRequest, cb?: (error: string, rep: DescribeEventsStateResponse) => void): Promise<DescribeEventsStateResponse>;
    /**
     * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
* 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
* 更多参考事件通知的[可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83)。
     */
    ConfirmEvents(req: ConfirmEventsRequest, cb?: (error: string, rep: ConfirmEventsResponse) => void): Promise<ConfirmEventsResponse>;
    /**
     * 对来源为 URL 的音视频媒体发起处理任务，功能包括：

1. 智能内容审核（鉴黄、鉴恐、鉴政）；
2. 智能内容分析（标签、分类、封面、按帧标签）；
3. 智能内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     */
    ProcessMediaByUrl(req: ProcessMediaByUrlRequest, cb?: (error: string, rep: ProcessMediaByUrlResponse) => void): Promise<ProcessMediaByUrlResponse>;
    /**
     * 修改用户自定义转码模板信息。
     */
    ModifyTranscodeTemplate(req: ModifyTranscodeTemplateRequest, cb?: (error: string, rep: ModifyTranscodeTemplateResponse) => void): Promise<ModifyTranscodeTemplateResponse>;
    /**
     * 根据视频内容审核模板唯一标识，获取视频内容审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置内容审核模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF)。
     */
    DescribeContentReviewTemplates(req: DescribeContentReviewTemplatesRequest, cb?: (error: string, rep: DescribeContentReviewTemplatesResponse) => void): Promise<DescribeContentReviewTemplatesResponse>;
    /**
     * 删除用户自定义图片处理模板。
     */
    DeleteImageProcessingTemplate(req: DeleteImageProcessingTemplateRequest, cb?: (error: string, rep: DeleteImageProcessingTemplateResponse) => void): Promise<DeleteImageProcessingTemplateResponse>;
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     */
    ModifyWatermarkTemplate(req: ModifyWatermarkTemplateRequest, cb?: (error: string, rep: ModifyWatermarkTemplateResponse) => void): Promise<ModifyWatermarkTemplateResponse>;
    /**
     * 该接口返回查询时间范围内使用的点播存储空间，单位：字节。
   1. 可以查询最近365天内的存储空间数据；
   2. 查询时间跨度不超过90天；
   3. 分钟粒度查询跨度不超过5天；
   4. 小时粒度查询跨度不超过10天。
     */
    DescribeStorageDetails(req: DescribeStorageDetailsRequest, cb?: (error: string, rep: DescribeStorageDetailsResponse) => void): Promise<DescribeStorageDetailsResponse>;
    /**
     * 该接口用于批量删除关键词样本。
     */
    DeleteWordSamples(req: DeleteWordSamplesRequest, cb?: (error: string, rep: DeleteWordSamplesResponse) => void): Promise<DeleteWordSamplesResponse>;
    /**
     * 该接口用于修改子应用信息，但不允许修改主应用信息。
     */
    ModifySubAppIdInfo(req: ModifySubAppIdInfoRequest, cb?: (error: string, rep: ModifySubAppIdInfoResponse) => void): Promise<ModifySubAppIdInfoResponse>;
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     */
    CreateImageSpriteTemplate(req: CreateImageSpriteTemplateRequest, cb?: (error: string, rep: CreateImageSpriteTemplateResponse) => void): Promise<CreateImageSpriteTemplateResponse>;
    /**
     * 该接口用于查询人物样本信息，支持根据人物 ID、名称、标签，分页查询。
     */
    DescribePersonSamples(req: DescribePersonSamplesRequest, cb?: (error: string, rep: DescribePersonSamplesResponse) => void): Promise<DescribePersonSamplesResponse>;
    /**
     * 删除用户自定义视频内容识别模板。
     */
    DeleteAIRecognitionTemplate(req: DeleteAIRecognitionTemplateRequest, cb?: (error: string, rep: DeleteAIRecognitionTemplateResponse) => void): Promise<DeleteAIRecognitionTemplateResponse>;
    /**
     * 该接口用于创建点播子应用。
     */
    CreateSubAppId(req: CreateSubAppIdRequest, cb?: (error: string, rep: CreateSubAppIdResponse) => void): Promise<CreateSubAppIdResponse>;
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     */
    DescribeAnimatedGraphicsTemplates(req: DescribeAnimatedGraphicsTemplatesRequest, cb?: (error: string, rep: DescribeAnimatedGraphicsTemplatesResponse) => void): Promise<DescribeAnimatedGraphicsTemplatesResponse>;
    /**
     * * 对媒体禁播后，除了点播控制台预览，其他场景访问视频各种资源的 URL（原始文件、转码输出文件、截图等）均会返回 403。
  禁播/解禁操作全网生效时间约 5~10 分钟。
     */
    ForbidMediaDistribution(req: ForbidMediaDistributionRequest, cb?: (error: string, rep: ForbidMediaDistributionResponse) => void): Promise<ForbidMediaDistributionResponse>;
    /**
     * 获取图片处理模板列表，支持根据条件，分页查询。
     */
    DescribeImageProcessingTemplates(req: DescribeImageProcessingTemplatesRequest, cb?: (error: string, rep: DescribeImageProcessingTemplatesResponse) => void): Promise<DescribeImageProcessingTemplatesResponse>;
    /**
     * 修改用户自定义指定时间点截图模板。
     */
    ModifySnapshotByTimeOffsetTemplate(req: ModifySnapshotByTimeOffsetTemplateRequest, cb?: (error: string, rep: ModifySnapshotByTimeOffsetTemplateResponse) => void): Promise<ModifySnapshotByTimeOffsetTemplateResponse>;
    /**
     * 修改超级播放器配置。
     */
    ModifySuperPlayerConfig(req: ModifySuperPlayerConfigRequest, cb?: (error: string, rep: ModifySuperPlayerConfigResponse) => void): Promise<ModifySuperPlayerConfigResponse>;
    /**
     * * 用于对媒体进行分类管理；
* 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](/document/product/266/31762)接口。
* 分类层次不可超过 4 层。
* 每个分类的子类数量不可超过 500 个。
     */
    CreateClass(req: CreateClassRequest, cb?: (error: string, rep: CreateClassResponse) => void): Promise<CreateClassResponse>;
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行内容审核、内容识别等视频处理。
     */
    CreateWordSamples(req: CreateWordSamplesRequest, cb?: (error: string, rep: CreateWordSamplesResponse) => void): Promise<CreateWordSamplesResponse>;
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     */
    DescribeAdaptiveDynamicStreamingTemplates(req: DescribeAdaptiveDynamicStreamingTemplatesRequest, cb?: (error: string, rep: DescribeAdaptiveDynamicStreamingTemplatesResponse) => void): Promise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     */
    ModifyWordSample(req: ModifyWordSampleRequest, cb?: (error: string, rep: ModifyWordSampleResponse) => void): Promise<ModifyWordSampleResponse>;
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     */
    DescribeImageSpriteTemplates(req: DescribeImageSpriteTemplatesRequest, cb?: (error: string, rep: DescribeImageSpriteTemplatesResponse) => void): Promise<DescribeImageSpriteTemplatesResponse>;
    /**
     * * 获得用户的所有分类信息。
     */
    DescribeAllClass(req: DescribeAllClassRequest, cb?: (error: string, rep: DescribeAllClassResponse) => void): Promise<DescribeAllClassResponse>;
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     */
    DescribeWatermarkTemplates(req: DescribeWatermarkTemplatesRequest, cb?: (error: string, rep: DescribeWatermarkTemplatesResponse) => void): Promise<DescribeWatermarkTemplatesResponse>;
    /**
     * 创建用户自定义水印模板，数量上限：1000。
     */
    CreateWatermarkTemplate(req: CreateWatermarkTemplateRequest, cb?: (error: string, rep: CreateWatermarkTemplateResponse) => void): Promise<CreateWatermarkTemplateResponse>;
    /**
     * 根据视频内容识别模板唯一标识，获取视频内容识别模板详情列表。返回结果包含符合条件的所有用户自定义视频内容识别模板及[系统预置视频内容识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF)。
     */
    DescribeAIRecognitionTemplates(req: DescribeAIRecognitionTemplatesRequest, cb?: (error: string, rep: DescribeAIRecognitionTemplatesResponse) => void): Promise<DescribeAIRecognitionTemplatesResponse>;
    /**
     * 创建用户自定义视频内容识别模板，数量上限：50。
     */
    CreateAIRecognitionTemplate(req: CreateAIRecognitionTemplateRequest, cb?: (error: string, rep: CreateAIRecognitionTemplateResponse) => void): Promise<CreateAIRecognitionTemplateResponse>;
    /**
     * 该接口用于获取当前账号有权限的子应用列表，包含主应用。若尚未开通子应用功能，接口将返回
 FailedOperation。
     */
    DescribeSubAppIds(req?: DescribeSubAppIdsRequest, cb?: (error: string, rep: DescribeSubAppIdsResponse) => void): Promise<DescribeSubAppIdsResponse>;
    /**
     * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
     */
    CommitUpload(req: CommitUploadRequest, cb?: (error: string, rep: CommitUploadResponse) => void): Promise<CommitUploadResponse>;
    /**
     * 修改用户自定义视频内容识别模板。
     */
    ModifyAIRecognitionTemplate(req: ModifyAIRecognitionTemplateRequest, cb?: (error: string, rep: ModifyAIRecognitionTemplateResponse) => void): Promise<ModifyAIRecognitionTemplateResponse>;
    /**
     * 修改转自适应码流模板
     */
    ModifyAdaptiveDynamicStreamingTemplate(req: ModifyAdaptiveDynamicStreamingTemplateRequest, cb?: (error: string, rep: ModifyAdaptiveDynamicStreamingTemplateResponse) => void): Promise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
    /**
     * 搜索媒体信息，支持多种条件筛选，以及支持对返回结果排序、过滤等功能，具体包括：
- 根据多个媒体文件名 Names 或描述信息 Descriptions 进行模糊搜索。
- 根据多个文件名前缀 NamePrefixes 进行搜索。
- 指定分类集合 ClassIds（见输入参数），返回满足集合中任意分类的媒体。例如：媒体分类有电影、电视剧、综艺等，其中电影分类下又有子分类历史片、动作片、言情片。如果 ClassIds 指定了电影、电视剧，那么电影和电视剧下的所有子分类都会返回；而如果 ClassIds 指定的是历史片、动作片，那么只有这2个子分类下的媒体才会返回。
- 指定标签集合 Tags（见输入参数），返回满足集合中任意标签的媒体。例如：媒体标签有二次元、宫斗、鬼畜，如果 Tags 指定了二次元、鬼畜2个标签，那么只要符合这2个标签中任意一个的媒体都会被检索出来。
- 指定来源集合 SourceTypes（见输入参数），返回满足集合中任意来源的媒体。例如：媒体来源有 Record (直播录制)、Upload （上传）等。如果 SourceTypes 指定了 Record 和 Upload ，那么符合这些来源的媒体都会被检索出来。
- 指定媒体的创建时间范围筛选媒体。
- 指定文件类型集合 Categories（见输入参数），返回满足集合中任意类型的媒体。例如：文件类型有 Video（视频）、 Audio （音频）、 Image （图片）。如果Categories指定了 Video 和 Audio 2个文件类型，那么符合这些类型的媒体都会被检索出来。
- 指定文件 ID 集合 FileIds ，返回匹配集合中任意 ID 的媒体。
- 指定直播推流码集合 StreamIds（见输入参数）筛选直播录制的媒体。
- 指定视频 ID 集合 Vids （见输入参数）筛选直播录制的媒体。
- （不推荐：应使用 Names、NamePrefixes 或 Descriptions 替代）指定单个文本 Text 对媒体文件名或描述信息进行模糊搜索。
- （不推荐：应使用 StreamIds 替代）指定单个推流直播码 StreamId 进行搜索。
- （不推荐：应使用 Vids 替代）指定单个视频 ID Vid 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个起始创建时间 StartTime 进行搜索。
- （不推荐：应使用 CreateTime 替代）指定单个结尾创建时间 EndTime 进行搜索。
- （不推荐： 应使用 SourceTypes 替代）指定单个媒体文件来源 SourceType 进行搜索。

- 以上参数之间可以任意组合进行检索。例如：筛选创建时间在2018年12月1日12:00:00到2018年12月8日12:00:00之间、分类为电影或电视剧、带有宫斗和悬疑标签的媒体。注意，任何支持数组输入的参数，其元素之间的搜索逻辑为‘或’。所有参数之间的逻辑关系为‘与’。
- 允许对结果根据创建时间进行排序并分页返回，通过 Offset 和 Limit （见输入参数）来控制分页。
- 允许通过 Filters 控制返回的媒体信息种类（默认返回所有信息）。可选输入包括：
    1. 基础信息（basicInfo）：包括媒体名称、分类、播放地址、封面图片等。
    2. 元信息（metaData）：包括大小、时长、视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该媒体转码生成的各种规格的媒体地址、视频流参数、音频流参数等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后的动图信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后的截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图后的雪碧图信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，的截图信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的打点信息。
    9. 转自适应码流信息（adaptiveDynamicStreamingInfo）：包括规格、加密类型、打包格式等相关信息。

<div id="maxResultsDesc">接口返回结果数限制：</div>
- <b><a href="#p_offset">Offset</a> 和 <a href="#p_limit">Limit</a> 两个参数影响单次分页查询结果数。特别注意：当这2个值都缺省时，本接口最多只返回10条查询结果。</b>
- <b>最大支持返回5000条搜索结果，超出部分不再支持查询。如果搜索结果量太大，建议使用更精细的筛选条件来减少搜索结果。</b>
     */
    SearchMedia(req: SearchMediaRequest, cb?: (error: string, rep: SearchMediaResponse) => void): Promise<SearchMediaResponse>;
    /**
     * 删除用户自定义水印模板。
     */
    DeleteWatermarkTemplate(req: DeleteWatermarkTemplateRequest, cb?: (error: string, rep: DeleteWatermarkTemplateResponse) => void): Promise<DeleteWatermarkTemplateResponse>;
    /**
     * 该接口用于根据人物 ID，删除人物样本。
     */
    DeletePersonSample(req: DeletePersonSampleRequest, cb?: (error: string, rep: DeletePersonSampleResponse) => void): Promise<DeletePersonSampleResponse>;
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     */
    CreateAnimatedGraphicsTemplate(req: CreateAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: CreateAnimatedGraphicsTemplateResponse) => void): Promise<CreateAnimatedGraphicsTemplateResponse>;
    /**
     * 修改用户自定义转动图模板。
     */
    ModifyAnimatedGraphicsTemplate(req: ModifyAnimatedGraphicsTemplateRequest, cb?: (error: string, rep: ModifyAnimatedGraphicsTemplateResponse) => void): Promise<ModifyAnimatedGraphicsTemplateResponse>;
    /**
     * 删除用户自定义采样截图模板。
     */
    DeleteSampleSnapshotTemplate(req: DeleteSampleSnapshotTemplateRequest, cb?: (error: string, rep: DeleteSampleSnapshotTemplateResponse) => void): Promise<DeleteSampleSnapshotTemplateResponse>;
    /**
     * 将点播视频发布到微信小程序，供微信小程序播放器播放。
     */
    WeChatMiniProgramPublish(req: WeChatMiniProgramPublishRequest, cb?: (error: string, rep: WeChatMiniProgramPublishResponse) => void): Promise<WeChatMiniProgramPublishResponse>;
    /**
     * 对 HLS 视频进行按时间段裁剪。

注意：裁剪出来的视频与原始视频共用 ts，仅生成新的 m3u8。原始视频删除后，该裁剪视频也会被删除。
     */
    SimpleHlsClip(req: SimpleHlsClipRequest, cb?: (error: string, rep: SimpleHlsClipResponse) => void): Promise<SimpleHlsClipResponse>;
    /**
     * 该接口用于创建人物样本，用于通过人脸识别等技术，进行内容识别、内容审核等视频处理。
     */
    CreatePersonSample(req: CreatePersonSampleRequest, cb?: (error: string, rep: CreatePersonSampleResponse) => void): Promise<CreatePersonSampleResponse>;
    /**
     * 该接口用于启用、停用子应用。被停用的子应用将封停对应域名，并限制控制台访问。
     */
    ModifySubAppIdStatus(req: ModifySubAppIdStatusRequest, cb?: (error: string, rep: ModifySubAppIdStatusResponse) => void): Promise<ModifySubAppIdStatusResponse>;
    /**
     * 修改用户自定义视频内容审核模板。
     */
    ModifyContentReviewTemplate(req: ModifyContentReviewTemplateRequest, cb?: (error: string, rep: ModifyContentReviewTemplateResponse) => void): Promise<ModifyContentReviewTemplateResponse>;
    /**
     * 对点播中的音视频媒体发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频截取一张图做封面；
7. 对视频转自适应码流（并加密）；
8. 智能内容审核（鉴黄、鉴恐、鉴政）；
9. 智能内容分析（标签、分类、封面、按帧标签）；
10. 智能内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     */
    ProcessMedia(req: ProcessMediaRequest, cb?: (error: string, rep: ProcessMediaResponse) => void): Promise<ProcessMediaResponse>;
    /**
     * 查询超级播放器配置，支持根据条件，分页查询。
     */
    DescribeSuperPlayerConfigs(req: DescribeSuperPlayerConfigsRequest, cb?: (error: string, rep: DescribeSuperPlayerConfigsResponse) => void): Promise<DescribeSuperPlayerConfigsResponse>;
    /**
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面等。
     */
    ModifyMediaInfo(req: ModifyMediaInfoRequest, cb?: (error: string, rep: ModifyMediaInfoResponse) => void): Promise<ModifyMediaInfoResponse>;
    /**
     * 删除雪碧图模板。
     */
    DeleteImageSpriteTemplate(req: DeleteImageSpriteTemplateRequest, cb?: (error: string, rep: DeleteImageSpriteTemplateResponse) => void): Promise<DeleteImageSpriteTemplateResponse>;
}