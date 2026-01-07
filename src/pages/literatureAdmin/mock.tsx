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
        <h3 style={{ color: 'rgb(55, 113, 237)', marginBottom: '15px' }}>Evaluating Drug Efficacy and Safety</h3>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            In the United States from 2011 to 2024, more than 29 million adverse drug reactions (ADRs) were reported through the FDA Adverse Events Reporting System (FAERS) (1) (see figure FAERS Adverse Events Reporting System). Approximately 3 to 6% of hospital admissions in the United States and 2.5 to 10.6% of admissions in Europe are due to ADRs (2). In low- and middle-income countries, approximately 134 million ADRs occur annually, resulting in 2.6 million deaths.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            All medications have the potential for adverse drug reactions (ADRs), and thus, the balance of benefits and risks should be considered whenever a medication is prescribed. ADRs can range from mild to severe. Serious adverse events are those that can cause disability, are life-threatening, result in hospitalization or death, or are congenital anomalies.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            The commonly used term side effect is imprecise, often used to refer to the unintended effects of a medication that occur within the medication's therapeutic range.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            ADRs can be considered to be a form of toxicity; however, toxicity is usually used to describe the effects of overingestion (accidental or intentional) of a drug or to elevated blood levels or enhanced drug effects that occur during appropriate use of a medication (eg, when drug metabolism is temporarily inhibited by a medical condition or another medication).
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            ADRs caused by drug hypersensitivity are not dose-related and require prior exposure. Allergies develop when a drug acts as an antigen or allergen. After a patient is sensitized, subsequent exposure to the drug produces one of several different types of allergic reaction. Clinical history and appropriate skin tests can sometimes help predict allergic ADRs.
          </p>
      </>
    )
  },
  {
    id: 4,
    title: 'Adverse Drug Reactions',
    content: (
      <>
        <h3 style={{ color: 'rgb(55, 113, 237)', marginBottom: '15px' }}>Adverse Drug Reactions</h3>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            Type I reactions (immediate hypersensitivity) are IgE-mediated. Antigen binds to IgE that is bound to tissue mast cells and blood basophils, triggering release of preformed mediators (eg, histamine, proteases, chemotactic factors) and synthesis of other mediators (eg, prostaglandins, leukotrienes, platelet-activating factor, cytokines). These mediators cause vasodilation, increased capillary permeability, mucus hypersecretion, smooth muscle spasm, and tissue infiltration with eosinophils, type 2 helper T (TH2) cells, and other inflammatory cells.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            Type II reactions (antibody-dependent cytotoxic hypersensitivity) result when antibody binds to cell surface antigens or to a molecule coupled to a cell surface. The surface-bound antigen-antibody structure (as opposed to the circulating antigen-antibody complex in type III hypersensitivity) activates cells that participate in antibody-dependent cell-mediated cytotoxicity (eg, natural killer cells, eosinophils, macrophages), complement, or both. The result is cell and tissue damage.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
Disorders involving type II reactions include hyperacute graft rejection of an organ transplant, Coombs-positive hemolytic anemias, Hashimoto thyroiditis, and anti–glomerular basement membrane disease (eg, Goodpasture syndrome).
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
Type III reactions (immune complex disease) cause inflammation in response to circulating antigen-antibody immune complexes deposited in vessels or tissue. These complexes can activate the complement system or bind to and activate certain immune cells, resulting in release of inflammatory mediators.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
Consequences of immune complex formation depend in part on the relative proportions of antigen and antibody in the immune complex. Early in the immune response, there is excess antigen with small antigen-antibody complexes, which do not activate complement. Later, when antigen and antibody are more balanced, immune complexes are larger and tend to be deposited in various tissues (eg, glomeruli, blood vessels), causing systemic reactions. The isotype of induced antibodies changes during an immune response, and the isotype, glycosylation, size, and charge of the complex’s components contribute to the clinical response.
          </p>
      </>
    )
  },
  {
    id: 5,
    title: 'Medication Errors',
    content: (
      <>
        <h3 style={{ color: 'rgb(55, 113, 237)', marginBottom: '15px' }}>Medication Errors</h3>
          <div style={{ color: 'rgba(54, 59, 71, 1)' }}>
            <p>ByShalini S. Lynch, PharmD, University of California San Francisco School of Pharmacy</p>
            <p>Reviewed ByEva M. Vivian, PharmD, MS, PhD, University of Wisconsin School of Pharmacy</p>
          </div>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            A medication error may or may not result in an adverse drug reaction. Errors in prescribing are common, especially for certain patient populations. Older adults, reproductive-age women, and children are particularly at risk.
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            Medication errors contribute to morbidity and mortality. Globally, the annual cost associated with medication errors is estimated to be more than 40 billion USD (see World Health Organization: Medication Without Harm). In 2000, the United States Institute of Medicine published a report, To Err is Human: Building a Safer Health System, which revealed that there are more deaths from medication errors than workplace injury (1).
          </p>
          <p style={{ color: 'rgba(54, 59, 71, 1)', marginTop: '15px' }}>
            Medication errors may involve:
          </p>
      </>
    )
  }
]