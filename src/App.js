import React from 'react';
import './App.css';
import Vizceral from 'vizceral-react';

const TRAFFIC = {
    "renderer": "region",
    "name": "eWarehouse",
    "displayName": "eWarehouse",
    "updated": 1477690448572,
    "nodes": [
        {
            "name": "Gravitee Gateway",
            "node_type": "service",
            "metadata": {
                "streaming": 1
            },
            notices: [],

            "nodes": [
                {
                    "name": "tetrabrach",
                    "metrics": {
                        "normal": 0,
                        "danger": 66.144
                    }
                },
                {
                    "name": "colloidal",
                    "metrics": {
                        "danger": 0.166,
                        "normal": 126.34000000000002
                    }
                },
                {
                    "name": "wardrobers"
                },
                {
                    "name": "yplast"
                },
                {
                    "name": "benet",
                    "metrics": {
                        "danger": 0.22400000000000003,
                        "normal": 130.17600000000002
                    }
                },
                {
                    "name": "imping",
                    "metrics": {
                        "danger": 0.22000000000000003,
                        "normal": 130.19000000000003
                    }
                },
                {
                    "name": "virility",
                    "metrics": {
                        "danger": 0.18600000000000003,
                        "normal": 130.158
                    }
                },
                {
                    "name": "eng",
                    "metrics": {
                        "danger": 0.244,
                        "normal": 129.494
                    }
                },
                {
                    "name": "use",
                    "metrics": {
                        "danger": 0.2,
                        "normal": 126.536
                    }
                },
                {
                    "name": "racegoings",
                    "metrics": {
                        "danger": 0.06999999999999999,
                        "normal": 43.19200000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        }, {
            "name": "eWH Frontend",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "kitschified",
                    "metrics": {
                        "danger": 0.8340000000000001,
                        "normal": 80.06
                    }
                }
            ],
            "renderer": "focusedChild"
        },
        {
            "name": "Keycloak IAM",
            "node_type": "users",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "dogships",
                    "metrics": {
                        "normal": 926.2660000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        },
        {
            "name": "Domain API",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "dogships",
                    "metrics": {
                        "normal": 926.2660000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        },
        {
            "name": "Logspace API",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "dogships",
                    "metrics": {
                        "normal": 926.2660000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        },
        {
            "name": "Addressbook",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "dogships",
                    "metrics": {
                        "normal": 926.2660000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        },
        {
            "name": "eWH Service",
            "metadata": {
                "streaming": 1
            },
            "nodes": [
                {
                    "name": "dogships",
                    "metrics": {
                        "normal": 926.2660000000001
                    }
                }
            ],
            "renderer": "focusedChild"
        },


    ],
    "connections": [
        // {
        //     "source": "eWH Frontend",
        //     "target": "Keycloak IAM",
        //     "metadata": {
        //         "streaming": 1
        //     },
        //     "metrics": {
        //         "normal": 19.136000000000003
        //     }
        // },
        {
            "source": "eWH Frontend",
            "target": "Gravitee Gateway",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.558000000000003
            }
        },
        {
            "source": "Keycloak IAM",
            "target": "Gravitee Gateway",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.136000000000003
            }
        },
        {
            "source": "Gravitee Gateway",
            "target": "Addressbook",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.136000000000003
            }
        }, {
            "source": "Gravitee Gateway",
            "target": "eWH Service",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.136000000000003
            }
        },
        {
            "source": "Gravitee Gateway",
            "target": "Domain API",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.136000000000003
            }
        },
        {
            "source": "Domain API",
            "target": "Logspace API",
            "metadata": {
                "streaming": 1
            },
            "metrics": {
                "normal": 19.136000000000003
            }
        },
    ],
    "maxVolume": 96035.538,
    "props": {
        "maxSemaphores": []
    },
    "metadata": {},
    "class": "normal",
    "serverUpdateTime": 1477691777441
};


function App() {
    return (
        <div style={{flex: 1, backgroundColor: "#2d2d2d"}}>

            <Vizceral
                traffic={TRAFFIC}
                //       view={this.state.currentView}
                showLabels={true}
                allowDraggingOfNodes={true}
                physicsOptions={{
                    isEnabled: true,
                    jaspersReplusionBetweenParticles: true,
                    viscousDragCoefficient: 0.2,
                    hooksSprings: {
                        restLength: 50,
                        springConstant: 0.2,
                        dampingConstant: 0.1
                    },
                    particles: {
                        mass: 1
                    }
                }}
                //       filters={this.state.filters}
                //       viewChanged={this.viewChanged}
                //       objectHighlighted={this.objectHighlighted}
                //       nodeContextSizeChanged={this.nodeContextSizeChanged}
                //       matchesFound={this.matchesFound}
                //       match={this.state.searchTerm}
                //       modes={this.state.modes}
                //       definitions={this.state.definitions}
                //       styles={}
            />


        </div>
    );
}

export default App;
