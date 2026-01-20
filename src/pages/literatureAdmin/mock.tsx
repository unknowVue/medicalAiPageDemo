export const literatureData = [
  {
    id: 1,
    title: 'Introduction to the Cardiac Patient',
    content: (
      <>
        <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        // flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3'
        }}>
          Introduction to the Cardiac Patient
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Jessica I. Gupta, MD</span>, University of Michigan Health; 
          <span style={{ color: '#dc2626' }}> Michael J. Shea, MD</span>, Michigan Medicine at the University of Michigan
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Jonathan G. Howlett, MD</span>, Cumming School of Medicine, University of Calgary
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Apr 2025
        </p>
      </div>

      {/* 导航链接区域 */}
      <div style={{ 
        marginBottom: '32px', 
        paddingBottom: '8px', 
        borderBottom: '1px solid #e2e8f0'
      }}>
        <a href="#history" style={{ color: '#1a202c', fontWeight: 'bold', marginRight: '8px' }}>History</a> | 
        <a href="#physical-examination" style={{ color: '#dc2626', fontWeight: 'bold', marginLeft: '8px' }}>Physical Examination</a>
      </div>

      {/* 介绍段落 */}
      <p style={{ marginBottom: '32px', lineHeight: '1.6' }}>
        Symptoms or physical examination findings may suggest a cardiovascular disorder. For confirmation, selected 
        <span style={{ color: '#dc2626' }}> noninvasive and invasive cardiac tests</span> are usually done.(1)
      </p>

      {/* History 部分 */}
      <div id="history" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>History</h2>
        </div>
        <div style={{ paddingLeft: '4px' }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            A thorough history is fundamental; it cannot be replaced by testing. The history must include a thorough systems review 
            because many symptoms apparently involving other systems (eg, dyspnea, indigestion) may be caused by cardiac disease. A 
            family history is important because many cardiac disorders (eg, 
            <span style={{ color: '#dc2626' }}> coronary artery disease</span>, 
            <span style={{ color: '#dc2626' }}> systemic hypertension</span>, 
            <span style={{ color: '#dc2626' }}> bicuspid aortic valve</span>, 
            <span style={{ color: '#dc2626' }}> hypertrophic cardiomyopathy</span>, 
            <span style={{ color: '#dc2626' }}> mitral valve prolapse</span>) have a heritable basis.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Serious cardiac symptoms include 
            <span style={{ color: '#dc2626' }}> chest pain</span> or discomfort, 
            <span style={{ color: '#dc2626' }}> dyspnea</span>, 
            <span style={{ color: '#dc2626' }}> weakness</span>, 
            <span style={{ color: '#dc2626' }}> fatigue</span>, 
            <span style={{ color: '#dc2626' }}> palpitations</span>, 
            <span style={{ color: '#dc2626' }}> light-headedness</span>, sense of 
            an impending faint, 
            <span style={{ color: '#dc2626' }}> syncope</span>, and 
            <span style={{ color: '#dc2626' }}> edema</span>. These symptoms are common in multiple cardiac diseases as well as in noncardiac diseases.
          </p>
        </div>
      </div>

      {/* Physical Examination 部分 */}
      <div id="physical-examination" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Physical Examination</h2>
        </div>
        <div style={{ paddingLeft: '4px' }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            The general 
            <span style={{ color: '#dc2626' }}> cardiovascular examination</span> and 
            <span style={{ color: '#dc2626' }}> cardiac auscultation</span> are discussed elsewhere.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Despite the ever-increasing use of cardiac imaging, bedside examination remains useful as it is always available and can be 
            repeated as often as desired without the cost of a formal imaging test. Clinician-operated bedside devices, such as the 
            sphygmomanometer and the stethoscope, have long been a part of the physical examination.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            <span style={{ color: '#dc2626' }}> Point-of-care ultrasound</span> done by the clinician at the bedside is an important adjunct to physical examination.
          </p>
        </div>
      </div>

      {/* Reference 部分 */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Reference</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          1. Fang JC, O'Gara PT: History and Physical Examination: An Evidence-Based Approach. In Libby P, Bonow RO, Mann DL, et al 
          (eds): Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, 12th ed. Philadelphia, Elsevier, 2022, pp 123-140.
        </p>
      </div>
    </div>
      </>
    )
  },
  {
    id: 2,
    title: 'Cardiovascular Examination',
    content: (
      <>
        <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3',
          flex: '1 1 auto'
        }}>
          Cardiovascular Examination
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          flex: '0 0 auto',
          minWidth: '200px'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Jessica I. Gupta, MD</span>, University of Michigan Health; 
          <span style={{ color: '#dc2626' }}> Michael J. Shea, MD</span>, Michigan Medicine at the University of Michigan
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Jonathan G. Howlett, MD</span>, Cumming School of Medicine, University of Calgary
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Apr 2025
        </p>
      </div>

      {/* 导航链接区域 */}
      <div style={{ 
        marginBottom: '24px', 
        paddingBottom: '8px', 
        borderBottom: '1px solid #e2e8f0',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <a href="#vital-signs" style={{ color: '#dc2626', fontWeight: 'bold' }}>Vital Signs</a> | 
        <a href="#pulses" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Pulses</a> | 
        <a href="#veins" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Veins</a> | 
        <a href="#chest-inspection" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Chest Inspection and Palpation</a> | 
        <a href="#lung-examination" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Lung Examination</a> | 
        <a href="#abdominal-examination" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Abdominal and Extremity Examination</a> | 
        <a href="#pocus" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Point-of-Care Ultrasound (POCUS)</a> | 
        <a href="#multimedia" style={{ color: '#4a5568', marginLeft: '8px' }}>
          <i className="fas fa-images" style={{ marginRight: '4px' }}></i>Multimedia
        </a>
      </div>

      {/* 介绍段落 */}
      <p style={{ marginBottom: '24px', lineHeight: '1.6' }}>
        Complete examination of all systems is essential to detect peripheral and systemic effects of cardiac disorders and evidence of noncardiac disorders that might affect the heart(1). Examination includes the following:
      </p>

      {/* 检查项目列表 */}
      <ul style={{ marginBottom: '24px', paddingLeft: '24px', lineHeight: '1.6' }}>
        <li style={{ marginBottom: '8px' }}>General appearance</li>
        <li style={{ marginBottom: '8px' }}>Vital sign measurement</li>
        <li style={{ marginBottom: '8px' }}>Pulse palpation and auscultation</li>
        <li style={{ marginBottom: '8px' }}>Vein observation</li>
        <li style={{ marginBottom: '8px' }}>Chest inspection and palpation</li>
        <li style={{ marginBottom: '8px' }}>Cardiac percussion, palpation, and <span style={{ color: '#dc2626' }}>auscultation</span></li>
        <li style={{ marginBottom: '8px' }}>Lung examination, including percussion, palpation, and auscultation</li>
        <li style={{ marginBottom: '8px' }}>Extremity and abdomen examination</li>
      </ul>

      {/* 额外说明 */}
      <p style={{ marginBottom: '24px', lineHeight: '1.6' }}>
        <span style={{ color: '#dc2626' }}>Cardiac auscultation</span> is discussed in a separate topic. Despite the ever-increasing use of cardiac imaging, bedside auscultation remains useful as it is always available and can be repeated as often as desired without cost.
      </p>

      <p style={{ marginBottom: '32px', lineHeight: '1.6' }}>
        Examination also includes the collection of other patient data.
      </p>

      {/* 引用部分 */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>General reference</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          1. Fang JC, O'Gara PT: History and Physical Examination: An Evidence-Based Approach. In Libby P, Bonow RO, Mann DL, et al (eds): Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, 12th ed. Philadelphia, Elsevier, 2022, pp 123-140.
        </p>
      </div>

      {/* Vital Signs 部分 */}
      <div id="vital-signs" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vital Signs</h2>
        </div>
        <div style={{ paddingLeft: '4px' }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Vital signs include
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '8px' }}>Blood pressure</li>
            <li style={{ marginBottom: '8px' }}>Heart rate and rhythm</li>
            <li style={{ marginBottom: '8px' }}>Respiratory rate</li>
          </ul>
        </div>
      </div>
    </div>
      </>
    )
  },
  {
    id: 3,
    title: 'Evaluating Drug Efficacy and Safety',
    content: (
      <>
        <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3',
          flex: '1 1 auto'
        }}>
          Evaluating Drug Efficacy and Safety
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          flex: '0 0 auto',
          minWidth: '200px'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Shalini S. Lynch, PharmD</span>, University of California San Francisco School of Pharmacy
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Eva M. Vivian, PharmD, MS, PhD</span>, University of Wisconsin School of Pharmacy
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Apr 2025
        </p>
      </div>

      {/* 导航链接区域 */}
      <div style={{ 
        marginBottom: '24px', 
        paddingBottom: '8px', 
        borderBottom: '1px solid #e2e8f0',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <a href="#clinical-drug-trials" style={{ color: '#dc2626', fontWeight: 'bold' }}>Clinical Drug Trials</a> | 
        <a href="#efficacy-effectiveness" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Efficacy and Effectiveness</a> | 
        <a href="#placebos" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Placebos</a> | 
        <a href="#drug-safety" style={{ color: '#4a5568', marginLeft: '8px' }}>Drug Safety</a>
      </div>

      {/* 介绍段落 */}
      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        A medication (or any medical treatment) should be used only when it will benefit a patient. Benefit takes into account both whether the medication produces the desired result (efficacy) and the type and likelihood of adverse effects (safety). Cost is commonly also balanced with benefit (see <span style={{ color: '#dc2626' }}>Economic Analyses in Clinical Decision Making</span>).
      </p>

      <p style={{ marginBottom: '32px', lineHeight: '1.6' }}>
        When new drugs are developed, they are evaluated in clinical trials, which evaluate for efficacy and safety.
      </p>

      {/* Clinical Drug Trials 部分 */}
      <div id="clinical-drug-trials" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Clinical Drug Trials</h2>
        </div>
        <div style={{ paddingLeft: '4px' }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Promising compounds can be identified by mass screening of hundreds or thousands of molecules for biologic activity. In other cases, knowledge of the specific molecular pathophysiology of a target disease allows for rational drug design via computer modeling or modification of existing pharmaceutical agents.
          </p>
          
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            The safety of newly developed drugs is initially evaluated in vitro in preclinical research in human cell cultures or in animal models.
          </p>
          
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Clinical research in humans to evaluate the safety and efficacy of new drugs involves clinical trials conducted in phases (see <span style={{ color: '#dc2626' }}>U.S. Food & Drug Administration: Clinical Research</span>):
          </p>
          
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            <span style={{ fontWeight: 'bold' }}>Phase 1</span> evaluates safety and dosage in humans. Varying amounts of the compound are given to a small number (often 20 to 100) of healthy volunteers to determine the dose at which toxicity first appears.
          </p>
          
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            <span style={{ fontWeight: 'bold' }}>Phase 2</span> evaluates efficacy in treating the target disease and side effects. The compound is given to a larger group of people (up to several hundred) for treatment of the target disease. An additional goal is to determine an optimal dose-response range.
          </p>
          
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            <span style={{ fontWeight: 'bold' }}>Phase 3</span> evaluates the drug's therapeutic effect in larger (often hundreds to thousands of people), more heterogeneous populations with the target disease and compares the drug with existing treatments, a placebo, or both. The purpose is to verify efficacy and detect adverse effects that may not have been observed during phases 1 and 2. This phase provides most of the safety data.
          </p>
        </div>
      </div>
    </div>
      </>
    )
  },
  {
    id: 4,
    title: 'Adverse Drug Reactions',
    content: (
      <>
        <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3',
          flex: '1 1 auto'
        }}>
          Adverse Drug Reactions
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          flex: '0 0 auto',
          minWidth: '200px'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 副标题 */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '18px', 
          fontWeight: 'normal', 
          color: '#4a5568',
          fontStyle: 'italic'
        }}>
          (Adverse Drug Effects, Medication Side Effects)
        </h2>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Shalini S. Lynch, PharmD</span>, University of California San Francisco School of Pharmacy
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Eva M. Vivian, PharmD, MS, PhD</span>, University of Wisconsin School of Pharmacy
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Apr 2025 | Modified May 2025
        </p>
      </div>

      {/* 定义框 */}
      <div style={{ 
        backgroundColor: '#edf2f7', 
        padding: '16px', 
        marginBottom: '32px',
        borderRadius: '4px'
      }}>
        <p style={{ lineHeight: '1.6' }}>
          Adverse drug reaction (also called adverse drug effect) is a broad term referring to an unintended effect of a medication that is undesirable, unpleasant, or harmful.
        </p>
      </div>

      {/* 导航链接区域 */}
      <div style={{ 
        marginBottom: '24px', 
        paddingBottom: '8px', 
        borderBottom: '1px solid #e2e8f0',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <a href="#classification" style={{ color: '#dc2626', fontWeight: 'bold' }}>Classification</a> | 
        <a href="#risk-factors" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Risk Factors</a> | 
        <a href="#symptoms" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Symptoms and Signs</a> | 
        <a href="#diagnosis" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Diagnosis</a> | 
        <a href="#treatment" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Treatment</a> | 
        <a href="#prevention" style={{ color: '#4a5568', marginLeft: '8px', marginRight: '8px' }}>Prevention</a> | 
        <a href="#multimedia" style={{ color: '#4a5568', marginLeft: '8px' }}>
          <i className="fas fa-images" style={{ marginRight: '4px' }}></i>Multimedia
        </a>
      </div>

      {/* 介绍段落 */}
      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        In the United States from 2011 to 2024, more than 29 million adverse drug reactions (ADRs) were reported through the 
        <span style={{ color: '#dc2626' }}> FDA Adverse Events Reporting System (FAERS)</span> (1) (see figure FAERS Adverse Events Reporting System). 
        Approximately 3 to 6% of hospital admissions in the United States and 2.5 to 10.6% of admissions in Europe are due to ADRs (2). 
        In low- and middle-income countries, approximately 134 million ADRs occur annually, resulting in 2.6 million deaths.
      </p>

      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        All medications have the potential for adverse drug reactions (ADRs), and thus, the balance of benefits and risks should be considered whenever a medication is prescribed. 
        ADRs can range from mild to severe. Serious adverse events are those that can cause disability, are life-threatening, result in hospitalization or death, or are congenital anomalies.
      </p>

      <p style={{ marginBottom: '32px', lineHeight: '1.6' }}>
        The commonly used term <span style={{ fontStyle: 'italic' }}>side effect</span> is imprecise, often used to refer to the unintended effects of a medication that occur within the medication's therapeutic range.
      </p>

      {/* References 部分 */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>References</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
          1. FDA Adverse Event Reporting System (FAERS). Public Dashboard, Database and Questions and Answers on FDA's Adverse Event Reporting System (FAERS). Accessed March 4, 2025.
        </p>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          2. Chenchula S, Atal S, Uppugunduri CRS. A review of real-world evidence on preemptive pharmacogenomic testing for preventing adverse drug reactions: a reality for future health care. Pharmacogenomics J. 2024;24(2):9. Published 2024 Mar 15. doi:10.1038/s41397-024-00326-1
        </p>
      </div>
    </div>
      </>
    )
  },
  {
    id: 5,
    title: 'Medication Errors',
    content: (
      <>
        <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3',
          flex: '1 1 auto'
        }}>
          Medication Errors
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          flex: '0 0 auto',
          minWidth: '200px'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Shalini S. Lynch, PharmD</span>, University of California San Francisco School of Pharmacy
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Eva M. Vivian, PharmD, MS, PhD</span>, University of Wisconsin School of Pharmacy
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Apr 2025
        </p>
      </div>

      {/* 定义框 */}
      <div style={{ 
        backgroundColor: '#edf2f7', 
        padding: '16px', 
        marginBottom: '32px',
        borderRadius: '4px'
      }}>
        <p style={{ lineHeight: '1.6' }}>
          A medication error is any preventable event that may cause or lead to inappropriate medication use or patient harm while the medication is in the control of a health care professional, patient, or caregiver.
        </p>
      </div>

      {/* 介绍段落 */}
      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        A medication error may or may not result in an adverse drug reaction. Errors in prescribing are common, especially for certain patient populations. Older adults, reproductive-age women, and children are particularly at risk.
      </p>

      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        Medication errors contribute to morbidity and mortality. Globally, the annual cost associated with medication errors is estimated to be more than 40 billion USD (see <span style={{ color: '#dc2626' }}>World Health Organization: Medication Without Harm</span>). In 2000, the United States Institute of Medicine published a report, To Err is Human: Building a Safer Health System, which revealed that there are more deaths from medication errors than workplace injury (1).
      </p>

      <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
        Medication errors may involve:
      </p>

      {/* 药物错误可能涉及的问题列表 */}
      <ul style={{ marginBottom: '32px', paddingLeft: '24px', lineHeight: '1.6' }}>
        <li style={{ marginBottom: '8px' }}>Wrong choice of a medication or a prescription for the wrong dose, frequency, or duration</li>
        <li style={{ marginBottom: '8px' }}>Errors in reading the prescription by the pharmacist so that the wrong medication or dose is dispensed</li>
        <li style={{ marginBottom: '8px' }}>Errors in reading the label of the drug container by the caregiver so that the wrong medication or dose is given</li>
        <li style={{ marginBottom: '8px' }}>Incorrect instructions to the patient</li>
        <li style={{ marginBottom: '8px' }}>Incorrect administration by a clinician, caregiver, or patient</li>
        <li style={{ marginBottom: '8px' }}>Incorrect storage by the pharmacist or patient, altering the medication's potency</li>
        <li style={{ marginBottom: '8px' }}>Use of an outdated drug, altering the potency</li>
        <li style={{ marginBottom: '8px' }}>Inaccurate transmission of prescription information between clinicians</li>
      </ul>

      {/* Unclear prescriptions 部分 */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
          Unclear prescriptions
        </h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          Digital prescriptions must be entered into the computer ordering system correctly, and handwritten prescriptions must be written as clearly as possible. The names of some drugs are similar and, if not written clearly, cause confusion. In the United States, <span style={{ color: '#dc2626' }}>The Joint Commission</span> provides guidelines for abbreviations used in prescriptions and medical records. For example, "qd" (once a day) may be confused with "qid" (4 times a day). Writing "once daily" is preferred.
        </p>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          Electronically transmitted or computer-printed prescriptions can avoid problems with illegible handwriting or inappropriate abbreviations. Electronic prescribing systems that use check boxes or pull-down lists may help direct prescribers to suitable dosages but also may increase the risk of inadvertently selecting the wrong drug or dose.
        </p>
      </div>
    </div>
      </>
    )
  },
  {
    id: 6,
    title: 'Overview of Cancer',
    content: (
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '32px', 
        backgroundColor: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
      }}>
        {/* 标题和按钮区域 */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#1a202c', 
            marginBottom: '16px',
            lineHeight: '1.3'
          }}>
            Overview of Cancer
          </h1>
          <button style={{ 
            backgroundColor: '#b71c1c', 
            color: 'white', 
            padding: '8px 24px', 
            borderRadius: '4px', 
            fontWeight: '600', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer'
          }}>
            <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
          </button>
        </div>

        {/* 功能图标区域 */}
        <div style={{ 
          display: 'flex', 
          marginBottom: '24px'
        }}>
          <span style={{ 
            cursor: 'pointer', 
            color: '#4a5568', 
            marginRight: '16px'
          }}>
            <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
          </span>
          <span style={{ 
            cursor: 'pointer', 
            color: '#4a5568', 
            marginRight: '16px'
          }}>
            <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
          </span>
          <span style={{ 
            cursor: 'pointer', 
            color: '#4a5568'
          }}>
            <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
          </span>
        </div>

        {/* 作者信息区域 */}
        <div style={{ marginBottom: '32px', fontSize: '14px' }}>
          <p style={{ marginBottom: '8px' }}>
            By <span style={{ color: '#dc2626' }}>Robert Peter Gale, MD, PhD, DSC(hc)</span>, Imperial College London
          </p>
          <p style={{ marginBottom: '8px' }}>
            Reviewed By <span style={{ color: '#dc2626' }}>Ashkan Emadi, MD, PhD</span>, West Virginia University School of Medicine, Robert C. Byrd Health Sciences Center
          </p>
          <p style={{ fontStyle: 'italic', color: '#718096' }}>
            Reviewed/Revised Sept 2024
          </p>
        </div>

        {/* 正文内容 */}
        <div style={{ lineHeight: '1.6', marginBottom: '32px' }}>
          <p>
            Cancer is an unregulated proliferation of cells. Its prominent properties are
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li>A lack of cell differentiation</li>
            <li>Local invasion of adjoining tissue</li>
            <li>Metastasis, which is spread to distant sites through the bloodstream or the lymphatic system (often)</li>
          </ul>
          <p>
            The <span style={{ color: '#dc2626' }}>immune system</span> may play a role in eliminating early cancers or premalignant cells. This concept is termed immune surveillance. Patients with congenital or acquired immunodeficiency have an increased cancer risk, particularly cancers associated with viral infection such as lymphomas and Kaposi sarcoma <span style={{ color: '#dc2626' }}>(1, 2)</span>.
          </p>
          <p>
            Many cancers are potentially curable, particularly if detected at an early stage, and long-term remission is often possible in those detected at later stages. There is controversy whether cancers detected at an early stage, such as breast cancers detected by screening mammography or prostate cancers detected by screening prostate-specific antigen (PSA) testing, will progress during a patient's lifetime. However, for many cancers early detection increases the potential for cure.
          </p>
          <p>
            When cure is not possible, as in many cases of advanced cancer, judicious treatment with <span style={{ color: '#dc2626' }}>surgery</span>, <span style={{ color: '#dc2626' }}>chemotherapy</span>, <span style={{ color: '#dc2626' }}>immune therapy</span>, and/or <span style={{ color: '#dc2626' }}>radiation therapy</span> may improve quality of life and prolong survival. However, in other patients, particularly in patients with poor functional status and in those with comorbid conditions, such treatment may be poorly tolerated, and <span style={{ color: '#dc2626' }}>palliative care</span> may be appropriate.
          </p>
        </div>

        {/* References 部分 */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>References</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            1. Ribatti D. The concept of immune surveillance against tumors. The first theories. Oncotarget 2017;8(4):7175-7180. doi:10.18632/oncotarget.12739
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            2. Swann JB, Smyth MJ. Immune surveillance of tumors. J Clin Invest 2007;117(5):1137-1146. doi:10.1172/JCI31405
          </p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Elevated Factor VIII, IX, and XI Levels',
    content: (
      <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '32px', 
      backgroundColor: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    }}>
      {/* 标题和按钮区域 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '24px'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginBottom: '16px',
          lineHeight: '1.3'
        }}>
          Elevated Factor VIII, IX, and XI Levels
        </h1>
        <button style={{ 
          backgroundColor: '#b71c1c', 
          color: 'white', 
          padding: '8px 24px', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}>
          <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>VIEW PATIENT EDUCATION
        </button>
      </div>

      {/* 功能图标区域 */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '24px'
      }}>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-print" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568', 
          marginRight: '16px'
        }}>
          <i className="fas fa-volume-up" style={{ fontSize: '18px' }}></i>
        </span>
        <span style={{ 
          cursor: 'pointer', 
          color: '#4a5568'
        }}>
          <i className="fas fa-qrcode" style={{ fontSize: '18px' }}></i>
        </span>
      </div>

      {/* 作者信息区域 */}
      <div style={{ marginBottom: '32px', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>
          By <span style={{ color: '#dc2626' }}>Michael B. Streiff, MD</span>, Johns Hopkins University School of Medicine
        </p>
        <p style={{ marginBottom: '8px' }}>
          Reviewed By <span style={{ color: '#dc2626' }}>Ashkan Emadi, MD, PhD</span>, West Virginia University School of Medicine, Robert C. Byrd Health Sciences Center
        </p>
        <p style={{ fontStyle: 'italic', color: '#718096' }}>
          Reviewed/Revised Jul 2025
        </p>
      </div>

      {/* 摘要区域 */}
      <div style={{ 
        backgroundColor: '#eef5f9', 
        padding: '16px', 
        marginBottom: '32px',
        borderRadius: '4px',
        borderLeft: '4px solid #0f4c81'
      }}>
        <p style={{ lineHeight: '1.6', color: '#1a202c' }}>
          Increased levels of factors VIII, IX, and XI are risk factors for venous thromboembolism (VTE). While these levels are genetically determined, elevated levels of factor VIII can occur in chronic inflammation and other systemic disorders. Treatment is with anticoagulation for VTE and, in the case of elevated factor VIII, specific treatment for underlying disorders.
        </p>
      </div>

      {/* 导航链接区域 */}
      <div style={{ 
        marginBottom: '32px', 
        paddingBottom: '8px', 
        borderBottom: '1px solid #e2e8f0'
      }}>
        <a href="#diagnosis" style={{ color: '#dc2626', fontWeight: 'bold', marginRight: '8px' }}>Diagnosis</a> | 
        <a href="#treatment" style={{ color: '#dc2626', fontWeight: 'bold', marginLeft: '8px' }}>Treatment</a>
      </div>

      {/* 正文内容 */}
      <div style={{ lineHeight: '1.6', marginBottom: '32px' }}>
        <p>
          Factors VIII, IX, and XI are clotting proteins made primarily in the liver. Factor VIII circulates in an inactive form bound to von Willebrand factor (VWF) until blood vessel injury activates it and separates them. Free Factor VIII then interacts with factor IX to facilitate clotting.
        </p>
        <p>
          Elevated factor VIII levels were first recognized to be a risk factor for venous thromboembolism (VTE) in the Leiden Thrombophilia Study, a case control study of patients with a first episode of VTE without cancer, and age- and sex-matched controls. Factor VIII activity &gt; 150 IUL was associated with a nearly 5-fold increased risk of VTE <sup>(1)</sup>. Elevated factor VIII levels have also been identified as a risk factor for recurrent VTE <sup>(2)</sup>.
        </p>
        <p>
          Elevated factor IX and factor XI antigen levels are also associated with an increased risk of VTE <sup>(3, 4)</sup>. However, the Longitudinal Investigation of Thromboembolism Etiology study also found that factor XI, but not factor IX, was associated with increased VTE risk when adjusted for age, sex, race, study, BMI (body mass index), and diabetes <sup>(5)</sup>.
        </p>
        <p>
          Elevated von Willebrand factor levels have also been associated with an increased risk of VTE <sup>(6)</sup>.
        </p>
      </div>

      {/* General references */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>General references</h3>
        <ol style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li>
            van der Meer FJ, Koster T, Vandenbroucke JP, Briet E, Rosendaal FR. The Leiden Thrombophilia Study (LETS). <em>Thromb Haemost.</em> 1997;78(1):631–635.
          </li>
          <li>
            Kylie PA, Minar E, Hirsch M, et al. High plasma levels of factor VIII and the risk of recurrent venous thromboembolism. <em>N Engl J Med.</em> 2000; 343(7):457-462. doi: 10.1056/NEJM200008173430702
          </li>
          <li>
            van Hylckama Vlieg A, van der Linden IK, Bertina RM, Rosendaal FR. High levels of factor IX increase the risk of venous thrombosis. <em>Blood.</em> 2000; 95(12):3678-3682.
          </li>
          <li>
            Meijers JC, Tekelenburg WL, Bouma BN, Bertina RM, Rosendaal FR. High levels of coagulation factor XI as a risk factor for venous thrombosis. <em>N Engl J Med.</em> 2000; 342(10):696-701. doi: 10.1056/NEJM200003093421004
          </li>
          <li>
            Cushman M, O'Meara ES, Folsom AR, et al. Coagulation factors IX through XII and the risk of future venous thrombosis: the Longitudinal Investigation of Thromboembolism Etiology. <em>Blood.</em> 2009; 114(14):2878-2883. doi: 10.1182/blood-2009-05-219915
          </li>
          <li>
            Edvardsen MS, Hindberg K, Hansen ES, et al. Plasma levels of von Willebrand factor and future risk of incident venous thromboembolism. <em>Blood Adv.</em> 2021;5(1):224-232. doi:10.1182/bloodadvances.2020003135
          </li>
        </ol>
      </div>

      {/* Diagnosis of Elevated Factor VIII, IX, and XI Levels */}
      <div id="diagnosis" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Diagnosis of Elevated Factor VIII, IX, and XI Levels</h2>
        </div>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.6' }}>
          <li>Measurement of factor VIII, IX, or XI</li>
        </ul>
        <p style={{ lineHeight: '1.6' }}>
          Levels of factor VIII, IX, and XI antigen and activity can be directly measured.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '24px' }}>
          Factor VIII, IX and XI have been associated with an increased risk of venous thromboembolism <sup>(1, 2)</sup>. When measuring factor activity levels, it is important to do testing in the absence of anticoagulants. Warfarin affects vitamin K dependent factors II, VII, IX and X activity and antigen levels. Direct oral anticoagulants can result in the underestimation of factor activity levels <sup>(3)</sup>. Factor antigen levels are not affected by direct oral anticoagulants.
        </p>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Diagnosis references</h3>
        <ol style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li>
            Lowe G, Wu O, van Hylckama Vlieg A, Folsom A, Rosendaal F, Woodward M. Plasma levels of coagulation factors VIII and IX and risk of venous thromboembolism: Systematic review and meta-analysis. <em>Thromb Res.</em> 2023;229:31-39. doi:10.1016/j.thromres.2023.06.026
          </li>
          <li>
            Meijers JC, Tekelenburg WL, Bouma BN, Bertina RM, Rosendaal FR. High levels of coagulation factor XI as a risk factor for venous thrombosis. <em>N Engl J Med.</em> 2000; 342(10):696-701. doi:10.1056/NEJM200003093421004
          </li>
          <li>
            Douxfils J, Ageno W, Samama CM, et al. Laboratory testing in patients treated with direct oral anticoagulants: a practical guide for clinicians. <em>J Thromb Haemost.</em> 2018;16(2):209-219. doi:10.1111/jth.13912
          </li>
        </ol>
      </div>

      {/* Treatment of Elevated Factor VIII, IX, and XI Levels */}
      <div id="treatment" style={{ marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#0f4c81', 
          color: 'white', 
          padding: '12px 16px', 
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Treatment of Elevated Factor VIII, IX, and XI Levels</h2>
        </div>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.6' }}>
          <li>Anticoagulation</li>
        </ul>
        <p style={{ lineHeight: '1.6' }}>
          Direct oral anticoagulants and vitamin K antagonists are effective for treatment of patients with elevated factor VIII, IX and XI levels with a venous thromboembolism <sup>(1)</sup>.
        </p>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Treatment reference</h3>
        <ol style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li>
            Campello E, Spiezia L, Simion C, et al. Direct Oral Anticoagulants in Patients With Inherited Thrombophilia and Venous Thromboembolism: A Prospective Cohort Study. <em>J Am Heart Assoc.</em> 2020;9(23):e018917. doi:10.1161/JAHA.120.018917
          </li>
        </ol>
      </div>
    </div>
    )
  },

];