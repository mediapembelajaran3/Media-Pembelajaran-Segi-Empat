window.globalProvideData('slide', '{"title":"NO.4","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":6,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide6","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6lYN5zoDxeb","actionGroups":{"ReviewInt_5m5hTahytYQ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5htpMMVapzb"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6J7XOBMBSn9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FQyn7oTMgo"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5q8FcI1v1g7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6ddeLSM9JUj"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5nVFDFkj6Dd"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"68AyyQe6r1s.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5m5hTahytYQ_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5m5hTahytYQ_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5m5hTahytYQ","typea":"var","valueb":"6ImIbY5UXKQ","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6ImIbY5UXKQ.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5m5hTahytYQ"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6ImIbY5UXKQ.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5m5hTahytYQ"}]}]}]},"ReviewIntCorrectIncorrect_5m5hTahytYQ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5htpMMVapzb"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6J7XOBMBSn9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FQyn7oTMgo"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5q8FcI1v1g7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6ddeLSM9JUj"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5nVFDFkj6Dd"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5m5hTahytYQ":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5m5hTahytYQ"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5m5hTahytYQ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5htpMMVapzb"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6J7XOBMBSn9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FQyn7oTMgo"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5q8FcI1v1g7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6ddeLSM9JUj"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5nVFDFkj6Dd"},"enabled":{"type":"boolean","value":false}}]},"5m5hTahytYQ_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"68AyyQe6r1s.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6ImIbY5UXKQ.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5m5hTahytYQ"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"68AyyQe6r1s.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"68AyyQe6r1s.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5m5hTahytYQ"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6lYN5zoDxeb":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.67i98ejDAgZ"}}]},"NavigationRestrictionPreviousSlide_6lYN5zoDxeb":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ZVBbX3s51d","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ZVBbX3s51d","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6ImIbY5UXKQ_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6ImIbY5UXKQ_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6ImIbY5UXKQ_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5m5hTahytYQ"}]},{"kind":"showtimer","id":"_player.6ImIbY5UXKQ_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5m5hTahytYQ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5m5hTahytYQ"}],"elseActions":[{"kind":"exe_actiongroup","id":"5m5hTahytYQ_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5m5hTahytYQ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5m5hTahytYQ","typea":"var","valueb":"6ImIbY5UXKQ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6ImIbY5UXKQ"},"completed_slide_ref":{"type":"string","value":"_player.5XYw6tcJdAK.6BUSXjciD6X"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5m5hTahytYQ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5m5hTahytYQ","typea":"var","valueb":"6ImIbY5UXKQ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6ImIbY5UXKQ"},"completed_slide_ref":{"type":"string","value":"_player.5XYw6tcJdAK.6BUSXjciD6X"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6lYN5zoDxeb"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6lYN5zoDxeb"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oqiirCwXNE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5c4TxGeOsDe"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pn0P8v9YFr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5n0VV591Mfo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6J7XOBMBSn9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VHFBftK4mi"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jIhQVvdMAu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bDi5b2ne2j"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":208,"id":"01","url":"story_content/6LtDeBr9SvN_80_DX1440_DY1440.swf","type":"normal","altText":"39.png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"39.png","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"6oqiirCwXNE"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":209,"id":"01","url":"story_content/6EulSU4NJ8r_80_P_1297_0_659_597_DX1440_DY1440.swf","type":"normal","altText":"MATEMATIKA (17).png","width":660,"height":597,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":209,"id":"02","url":"story_content/6EulSU4NJ8r_80_P_1297_0_659_597_DX1440_DY1440.swf","type":"normal","altText":"MATEMATIKA (17).png","width":660,"height":597,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":224,"yPos":202,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":116,"rotateYPos":105,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":116,"snapy":105,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":210,"altText":"MATEMATIKA (17).png","pngfb":false,"pr":{"l":"Lib","i":347}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":210,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Drag Over","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":210,"altText":"MATEMATIKA (17).png","pngfb":false,"pr":{"l":"Lib","i":348}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":210,"strokewidth":0}}}],"width":232,"height":210,"resume":true,"useHandCursor":true,"id":"5c4TxGeOsDe","variables":[{"kind":"variable","name":"_dragover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetDragOverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDragOverState"}]},{"kind":"ondragout","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragconnect","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragend","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":209,"id":"01","url":"story_content/6EulSU4NJ8r_80_P_1297_0_659_597_DX1440_DY1440.swf","type":"normal","altText":"MATEMATIKA (17).png","width":660,"height":597,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":209,"id":"02","url":"story_content/6EulSU4NJ8r_80_P_1297_0_659_597_DX1440_DY1440.swf","type":"normal","altText":"MATEMATIKA (17).png","width":660,"height":597,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":448,"yPos":202,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":116,"rotateYPos":105,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":116,"snapy":105,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":210,"altText":"MATEMATIKA (17).png","pngfb":false,"pr":{"l":"Lib","i":347}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":210,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Drag Over","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":210,"altText":"MATEMATIKA (17).png","pngfb":false,"pr":{"l":"Lib","i":348}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":210,"strokewidth":0}}}],"width":232,"height":210,"resume":true,"useHandCursor":true,"id":"6pn0P8v9YFr","variables":[{"kind":"variable","name":"_dragover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetDragOverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDragOverState"}]},{"kind":"ondragout","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragconnect","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragend","actions":[{"kind":"adjustvar","variable":"_dragover","operator":"set","value":{"type":"boolean","value":false}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":32,"yPos":194,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":91.5,"rotateYPos":87.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":185,"bottom":177,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":349}},"html5data":{"xPos":0,"yPos":0,"width":184,"height":176,"strokewidth":1}},"width":184,"height":176,"resume":true,"useHandCursor":true,"id":"5n0VV591Mfo"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":210,"id":"01","url":"story_content/6WGVvIpUKAb_80_P_1137_438_273_250_DX2094_DY2094.swf","type":"normal","altText":"MATEMATIKA (13).png","width":273,"height":250,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":48,"yPos":218,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":70,"rotateYPos":64,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":69,"snapy":64,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":140,"bottom":128,"altText":"MATEMATIKA (13).png","pngfb":false,"pr":{"l":"Lib","i":350}},"html5data":{"xPos":0,"yPos":0,"width":140,"height":128,"strokewidth":0}},"width":140,"height":128,"resume":true,"useHandCursor":true,"id":"6J7XOBMBSn9","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"ondragconnect","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6FQyn7oTMgo"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":211,"id":"01","url":"story_content/6SLXTQ3PQt0_80_P_67_0_551_371_DX1550_DY1550.swf","type":"normal","altText":"MATEMATIKA (18).png","width":551,"height":371,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":56,"yPos":234,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":65.5,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":65,"snapy":44,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":131,"bottom":88,"altText":"MATEMATIKA (18).png","pngfb":false,"pr":{"l":"Lib","i":351}},"html5data":{"xPos":0,"yPos":0,"width":131,"height":88,"strokewidth":0}},"width":131,"height":88,"resume":true,"useHandCursor":true,"id":"6ddeLSM9JUj","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"ondragconnect","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5htpMMVapzb"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":212,"id":"01","url":"story_content/6WGVvIpUKAb_80_P_1137_711_432_318_DX2094_DY2094.swf","type":"normal","altText":"MATEMATIKA (13).png","width":432,"height":319,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":56,"yPos":226,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":76,"rotateYPos":56,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":76,"snapy":56,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":152,"bottom":112,"altText":"MATEMATIKA (13).png","pngfb":false,"pr":{"l":"Lib","i":352}},"html5data":{"xPos":0,"yPos":0,"width":152,"height":112,"strokewidth":0}},"width":152,"height":112,"resume":true,"useHandCursor":true,"id":"6FQyn7oTMgo","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"ondragconnect","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6ddeLSM9JUj"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":213,"id":"01","url":"story_content/6WGVvIpUKAb_80_P_841_756_273_250_DX2094_DY2094.swf","type":"normal","altText":"MATEMATIKA (13).png","width":273,"height":250,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":64,"yPos":234,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56.5,"rotateYPos":52,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":56,"snapy":52,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":113,"bottom":104,"altText":"MATEMATIKA (13).png","pngfb":false,"pr":{"l":"Lib","i":353}},"html5data":{"xPos":0,"yPos":0,"width":113,"height":104,"strokewidth":0}},"width":113,"height":104,"resume":true,"useHandCursor":true,"id":"5nVFDFkj6Dd","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"ondragconnect","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5q8FcI1v1g7"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":214,"id":"01","url":"story_content/6WGVvIpUKAb_80_P_1206_28_341_409_DX2094_DY2094.swf","type":"normal","altText":"MATEMATIKA (13).png","width":341,"height":410,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":64,"yPos":210,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":60,"rotateYPos":72,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":60,"snapy":72,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":120,"bottom":144,"altText":"MATEMATIKA (13).png","pngfb":false,"pr":{"l":"Lib","i":354}},"html5data":{"xPos":0,"yPos":0,"width":120,"height":144,"strokewidth":0}},"width":120,"height":144,"resume":true,"useHandCursor":true,"id":"5htpMMVapzb","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"ondragconnect","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5nVFDFkj6Dd"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5VHFBftK4mi_74043994","id":"01","linkId":"txt__default_5VHFBftK4mi","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":569,"bottom":56,"pngfb":false,"pr":{"l":"Lib","i":356}}}],"shapemaskId":"","xPos":96,"yPos":58,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":288,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":576,"bottom":60,"altText":"Kamu akan melihat berbagai gambar benda dari kehidupan sehari-hari. Tugasmu adalah kelompokkan setiap gambar ke dalam salah satu kategori contoh segi empat dan bukan contoh segi empat","pngfb":false,"pr":{"l":"Lib","i":355}},"html5data":{"xPos":0,"yPos":0,"width":576,"height":60,"strokewidth":0}},"width":576,"height":60,"resume":true,"useHandCursor":true,"id":"5VHFBftK4mi"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":215,"id":"01","url":"story_content/6SLXTQ3PQt0_80_P_637_51_273_295_DX1550_DY1550.swf","type":"normal","altText":"MATEMATIKA (18).png","width":273,"height":296,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":72,"yPos":226,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":51.5,"rotateYPos":56,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":51,"snapy":56,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5m5hTahytYQ"],"dragoverids":["_drop_5m5hTahytYQ"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":103,"bottom":112,"altText":"MATEMATIKA (18).png","pngfb":false,"pr":{"l":"Lib","i":357}},"html5data":{"xPos":0,"yPos":0,"width":103,"height":112,"strokewidth":0}},"width":103,"height":112,"resume":true,"useHandCursor":true,"id":"5q8FcI1v1g7","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6jIhQVvdMAu_1740823007","id":"01","linkId":"txt__default_6jIhQVvdMAu","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":-1,"right":151,"bottom":26,"pngfb":false,"pr":{"l":"Lib","i":359}}}],"shapemaskId":"","xPos":40,"yPos":162,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":84,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":169,"bottom":26,"altText":"Pindahkan benda berikut ke dalam kardus yang sesuai.","pngfb":false,"pr":{"l":"Lib","i":358}},"html5data":{"xPos":0,"yPos":0,"width":168,"height":24,"strokewidth":1}},"width":168,"height":24,"resume":true,"useHandCursor":true,"id":"6jIhQVvdMAu"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6bDi5b2ne2j_12445634","id":"01","linkId":"txt__default_6bDi5b2ne2j","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":91,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":314}}}],"shapemaskId":"","xPos":592,"yPos":362,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":113,"bottom":33,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":313}},"html5data":{"xPos":0,"yPos":0,"width":112,"height":32,"strokewidth":1}},"width":112,"height":32,"resume":true,"useHandCursor":true,"id":"6bDi5b2ne2j","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5XYw6tcJdAK.67i98ejDAgZ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5m5hTahytYQ_CorrectReview","id":"01","linkId":"5m5hTahytYQ_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":407,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":316}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":315}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5m5hTahytYQ_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5m5hTahytYQ_IncorrectReview","id":"01","linkId":"5m5hTahytYQ_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":418,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":318}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":317}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5m5hTahytYQ_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');