## FileNet Salesforce Connector
**an IBM Cloud Pak for Business Automation use case**
***

# Introduction

**Use Case:** FileNet Salesforce Connector

**Use Case Overview:** Focus Corp have recently acquired Salesforce as part of their strategy to drive sales opportunities and client relationships, documents such as contracts, meting notes, invoices, etc , needed to be associated to client accounts or opportunities as part of their day by day operations.  You will assume the role of Chad, an Sales Specislist employee at Focus Corp. Chad will seamlessly connect Salesforce with FileNet Content Manager to eliminate a content silo and manage Salesforce content within the leading, modern FileNet Content Manager platform. This native integration allows Salesforce users to store and manage related content seamlessly in FileNet Content Manager as it relates to Salesforce accounts, cases, opportunities, and more. They will no longer need to switch applications to find related information. With a Salesforce-oriented user experience, this connector will require minimal to no training, and IT teams can take advantage of the feature-rich content management capabilities of FileNet and govern enterprise content in one place.

![1](./images/001-Architecture.png)


**Environment Access:**

  * **TSDEV Sales Force Environment** the TSDEV Salesforce environment is predeployed and already configured to integrate with Filenet Contect Manager, you will need to request access to the tenant by sending an email to fnaranjo@ec.ibm.com. You will receive an email from Salesforce to activate your account and change the password.

  The Salesforce environment URL is: https://cp4ba-tsdev-dev.lightning.force.com

 
***

# Getting Started Lab

## 0. General Info
<a name="lab-section-0"></a>

??? note summary "Expand to view icons used throughout this lab"
    | Icon   | Description                                   |
    | :----- | :-------------------------------------------- |
    | ℹ️     | **Informational note**                        |
    | ⚠️      | **Warning note**                              |
    | ⚙️      | **Sections identified with a ﹡ indicates that the section may require deeper technical expertise and should be skipped by non-technical users** |

## 1. Scenario Introduction - FileNet Salesforce Connector
<a name="lab-section-1"></a>
??? note SUMMARY "Expand to view"

    **Use Case Overview**
    Employee applicant (John Doe) submitted an employee application and video interview along with other materials as part of the employment application process. During this process, HR processors initially reviewed the employment application making comments and annotations on the document along with entering video bookmarks, allowing additional reviewers to quickly locate key responses. Lucy along with other reviewers are able to review all the information and documents pertaining to applicant John Doe in the teamspace in a consistent and secure manner using an intuitive user-interface. Some of the information such as the applicant's SSN, is available on some of the documents but they are redacted so that only reviewers with the appropriate permission are able to see the redacted content. The use of video bookmarks also allows Lucy to quickly jump to key sections of the video without necessarily having to watch the entire video. Finally, Lucy is able to integrate with enterprise workflow to launch additional manual and automated processes.

    **Discovery Map**

    ![Discovery Map](./images/000-Intro-DiscoveryMap.png)

    [Go to top](#lab-section-1) | [Go to Getting Started Lab](#getting-started-lab)

## 2. Login and Setup Your Environment
<a name="lab-section-2"></a>
??? note summary "Expand to view"

    **IBM Navigator is a desktop for an organization's workers to find and organize information.**

    You are now a Human Resources (HR) Onboarding Specialist, Lucy, at Focus Corp reviewing an applicant, John Doe, for employment. As an onboarding specialist, Lucy will use the IBM Navigator user interface to review content submitted by John such as the employment application and video interview.

    Let's take a quick tour of the **IBM Navigator** user interface.

    1\. Click on the navigation menu icon in the upper left corner of the screen

## 3. Tour FileNet Salesforce Connector
<a name="lab-section-3"></a>
??? note SUMMARY "Expand to view"

    **IBM Navigator is a desktop for an organization's workers to find and organize information.**

    You are now a Human Resources (HR) Onboarding Specialist, Lucy, at Focus Corp reviewing an applicant, John Doe, for employment. As an onboarding specialist, Lucy will use the IBM Navigator user interface to review content submitted by John such as the employment application and video interview.

    Let's take a quick tour of the **IBM Navigator** user interface.

    1\. Click on the navigation menu icon in the upper left corner of the screen  

    The navigation menu icon (also commonly referred to as the hamburger icon) is used to access the navigation menu and features such as **Browse**, **Search**, **Share**, **Teamspaces**, **Work**, **Cases** and **Reports**. Additional features can also be added using plugins. This interface including the top banner, list of features and menu options are configurable through the use of desktops.

    Note: The **Reports** feature is used for Records Management and may or may not be installed on your environment. Records Management related activities such as declaring a record can be done automatically and also manually using the **Browse** feature. The **Work** and **Cases** feature show workflow tasks assigned to the user and case manager activities (respectively).

    ![13](./images/100-Navigator-Hamburger.png)

    2\. Click the **Browse** feature  

    ![44](./images/100-Navigator-BrowseFeature.png)

    You are now viewing a repository called **Corporate Operations** which is an **IBM FileNet Content Manager** repository.
    
    !!! note
        You can also access other repositories and perform cross-repository searches using **CM8** (IBM Content Manager), **CMOD** (IBM Content Manager OnDemand), **Box®** and **CMIS** (Content Management Interoperability Services) compliant repositories like **Alfresco®** and **Microsoft SharePoint®** On-Premises.

    3\. From the folder structure on the left side of the screen, traverse and click on the **Focus Corp Docs / Human Resources / Onboarded Employees** folder representing content for onboarded employees.  

    ![13](./images/110c-Navigator-OnboardedEmployees.png)

    As shown the diagram above, the center or content area of the screen shows the selected content which may also be used to traverse the folder structure. Additionally, the top of the content area displays the full folder structure of the selected content.

    4\. Click on the **Selena Swift** checkbox as shown in the diagram below.  

    Please note that the folder can be selected by either clicking on the checkbox -OR- by clicking on the folder row. If a checkbox is not visible, contact your administrator to enable **Content list checkboxes** at the desktop level. Clicking on the folder name text will select the folder and additionally traverse into the folder.

    ![13](./images/115-Navigator-SelenaSwift.png)

    For onboarded employee – **Selena Swift**, you can see custom folder properties such as the **First Name**, **Last Name**, **Employee ID**, **Onboarded** status and **Hire Date**.

    5\. Navigate to the **Focus Corp Docs / Human Resources / Onboarded Employees / Selena Swift / Employee Packet** folder and then click on the checkbox for the first document. Next, in the upper-right corner, select the different **Views** (**Details**, **Magazine**, **Filmstrip**). As shown in the diagram below, the **Details** view is shown as the default view.  

    ![13](./images/120c-Navigator-EmployeePacket.png)

    In our example, Focus Corp maintains an **Employee Packet** folder that contains new employee info documents such as the **Confidentiality Agreement** and **Employee Manual**. In the **Details** view, you are able to see the thumbnail and properties of the selected content.

    6\. Select the **Magazine** view  

    ![13](./images/121-Navigator-Magazine.png)

    In the **Magazine** view, you can now see the same content along with social features such as **Likes**, **Tags**, **Downloads** and **Comments**.

    7\. Select the **Filmstrip** view. The **Filmstrip** view is very useful for looking at media such pictures. Select the **Photos** folder below the **Employee Packet** folder and then select each picture document.

    ![13](./images/122-Navigator-Filmstrip.png)

    [Go to top](#lab-section-3) | [Go to Getting Started Lab](#getting-started-lab)

## 4. Summary
<a name="lab-section-4"></a>

??? note SUMMARY "Expand to view"

    As you saw, content services enables secure and compliant content access through the use of teamspaces, viewing and editing capabilities such as role-based Redactions, merge and split, video bookmarks and finally workflow to automate additional processes. The Cloud Pak for Business Automation provides a powerful, pre-integrated platform including Content Services alongside additional business automation services such as Workflow (BAW), RPA, Decisions (ODM and ADS) and more.

    Please visit the [Additional Assets](#additional-assets) section for additional features not covered in this lab.<br><br>

    >BAW - Business Automation Workflow, ODM - Operational Decision Manager, ADS - Automation Decision Services
    
    [Go to top](#lab-section-9) | [Go to Getting Started Lab](#getting-started-lab)

## 5. Troubleshooting
<a name="lab-section-5"></a>
??? note SUMMARY "Expand to view"

    1\. Using Salesforce UI 
    Chrome/Fifefox are the recommended browsers to display the document viewer and work with documents from the Accounts Tab. 

    [Go to top](#lab-section-10) | [Go to Getting Started Lab](#getting-started-lab)

***

# Additional Assets

**additional assets to explore**

## 110. GraphQL
<a name="additional-assets-110"></a>
??? note SUMMARY "Expand to view"
    Video: <a href="https://ibm.biz/SimplifyDevelopmentFileNetGraphQL" target="_blank">Simplify Development using the FileNet GraphQL API (7:18)</a>

    ![Simplify Development FileNet GraphQL Video](./images/additional-assets/FileNetGraphQL-Thumbnail-Intro.png)

    The FileNet GraphQL API enables you to query and manipulate data easily through an intuitive and flexible syntax that simplifies application development for your Content Platform Engine. The API allows you to request the exact information you need and receive predictable results reducing the number of network calls and bandwidth requirements improving performance.

    [Go to top](#additional-assets) | [Go to Introduction](#introduction) | [Go to Getting Started Lab](#getting-started-lab)



## 120. Salesforce Integration
<a name="additional-assets-130"></a>
??? note SUMMARY "Expand to view"
    Video: <a href="https://ibm.biz/FileNetSalesforce" target="_blank">Salesforce CRM Content to FileNet (6:29)</a>

    ![FileNet Saleforce Video](./images/additional-assets/SalesforceOverview2.png)

    Seamlessly connect Salesforce with FileNet Content Manager to eliminate a content silo and manage Salesforce content within the leading, modern FileNet Content Manager platform. This native integration allows Salesforce users to store and manage related content seamlessly in FileNet Content Manager as it relates to Salesforce accounts, cases, opportunities, and more. They will no longer need to switch applications to find related information. With a Salesforce-oriented user experience, this connector will require minimal to no training, and IT teams can take advantage of the feature-rich content management capabilities of FileNet and govern enterprise content in one place.

    [Go to top](#additional-assets) | [Go to Introduction](#introduction) | [Go to Getting Started Lab](#getting-started-lab)
