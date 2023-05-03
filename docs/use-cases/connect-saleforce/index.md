## Connect Salesforce CRM Content to FileNet
**an IBM Cloud Pak for Business Automation use case**
***

# Introduction

**Use Case:** Connect Salesforce CRM Content to FileNet

**Use Case Overview:** Focus Corp recently acquired a subscription to Salesforce CRM as part of their strategy to drive sales opportunities and client relationships, documents such as contracts, meeting notes, invoices, etc , needed to be associated to client accounts or opportunities as part of their day by day operations. You will assume the role of Chad, a Sales Specialist employee at Focus Corp. Chad will seamlessly connect Salesforce with FileNet Content Manager to eliminate a content silo and manage Salesforce content within the leading, modern FileNet Content Manager platform. This native integration allows Salesforce users to store and manage related content seamlessly in FileNet Content Manager as it relates to Salesforce accounts, cases, opportunities, and more. They will no longer need to switch applications to find related information. With a Salesforce-oriented user experience, this connector will require minimal to no training, and IT teams can take advantage of the feature-rich content management capabilities of FileNet and govern enterprise content in one place.

The IBM FileNet Content Services GraphQL API provides the connection between the IBM FileNet Connector for Salesforce app and the IBM FileNet Content Engine server. The following graphic describes this connection:

![1](./images/001-Architecture.png)

The FileNet Salesforce Connector App connects to the IBM FileNet Content Services GraphQL API through a secure HTTPS connection. The GraphQL API then makes calls to the Content Platform Engine server through the Content Engine Java API to interact with Documents and with SalesforceRelationship objects that associate Documents with Salesforce records.

**Environment Access:**

**Choose an option:**

* Cloud Pak for Business Automation as a Service demo environment (likely an IBMer or Business Partner): your environment is predeployed, continue to the [Getting Started Lab](#getting-started-lab) Lab section below.

* Install Yourself: To deploy Connect Salesforce on your own environment, and technical architecture information, see the <a href="https://github.com/ibm-cloud-architecture/dba-connect-salesforce" target="_blank">dba-onboarding-automation</a> git repository which includes the required deployment artifacts.
 
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

    Sales Specialist (Chad Jones) needs to create a new SalesForce Account for a customer. As part of the process he needs to attach several documentation to the account for auditing and tracking . This documentation have several properties that need to be added as document metadata in the IBM Filenet Content Manager Repository. The document properties are often updated by sales representatives as well as the version of the documents. Being able to view , download and delete associated documents is crucial so Chad can  manage the required account documentation from one single place instead of using multiple user interfaces.

    **Discovery Map**

    ![Discovery Map](./images/002-process.png)

    [Go to top](#lab-section-1) | [Go to Getting Started Lab](#getting-started-lab)

## 2. Login and Setup Your Environment
<a name="lab-section-2"></a>
??? note summary "Expand to view"

    **Salesforce is a customer relationship management (CRM) platform. It helps marketing, sales, commerce, service and IT teams work as one from anywhere and collaborate to progress sales opportunities and handle the relationship with clients.**

    1\. One you request access to the Salesforce environment, you will receive an email to activate your account, go ahead a click "Verify Account"

    ![Verify1](./images/003-verify.png)    

    2\. You will be asked to change your password

    ![Verify2](./images/004-verify.png) 

    3\. Once you change your password you will be redirected to the Salesforce home page
    
    ![Verify3](./images/005-verify.png) 

## 3. FileNet Salesforce Connector
<a name="lab-section-3"></a>
??? note SUMMARY "Expand to view"

    You are now a Sales Specialist employee at Focus Corp, Chad, at Focus Corp creating a new Customer for handling sales opportunities and client relationship . As an Sales Specialist, Chad will use the Salesforce web user interface to create a new account and associate relevant documentation for auditing and tracking. The documentation have properties that will help you identify it in the future, you will also need to view and update this documents from the Salesforce web page.

    Let's get started

    1\. Access the IBM Filenet Sales Force Application 

    In the SalesForce menu search for "IBM Filenet" and then click over the "IBM FileNet Salesforce Connector" Application
    
     ![Connector1](./images/006-connector.png)

    2\. Create a new Account in Salesforce

    In the "IBM FileNet Salesforce Connector" Application menu click "Accounts" and then "New" button to create a new Account
    
     ![Connector1](./images/007-connector.png)

    3\. Complete the new Account information in Salesforce

    In the "New Account" window complete the following properties and click "Save":

    * Account Name: TestAcount(Username)
    * Type: Customer
    * Industry: Communications
    * Employees: 25
    * Annual Revenue: 5'000.000
    
     ![Connector1](./images/008-connector.png)

    4\. You will be redirected to the "TestAcount" account page, there is a widget called "Related Documents" which is the one that provides the IBM Filenet integration, as it is a new company the list of documents should be empty.
    
     ![Connector1](./images/009-connector.png)

    5\. Now you will upload some example documents to the account, you can use the folowing files:

    * [Map Example](./sample-documents/Image.jpg)
    * [Meeting Notes](./sample-documents/Meeting%20Notes%201-30-2023.docx)
    * [Brochure](./sample-documents/WSD14120USEN.pdf)

    Use the following table to upload the 3 documents to the account:

    Name | Filename | Document Class      | Account Name
    ------- | ---------------- | ---------- | ---------:
    Map Example  | Image.jpg | SF Document | TestAccount(Francisco)
    Meeting Notes  | Meeting Notes 1-30-2023.docx        | SF CRM Document       | TestAccount(Francisco)
    Brochure   | WSD14120USEN.pdf | SF Document      | TestAccount(Francisco)

    Use the next screen as reference for document uploading:

    ![Connector1](./images/010-connector.png)

    After uploading the files your "Related Documents" widget should look like this

    ![Connector1](./images/011-connector.png)

    6\. Once the documents are uploaded you can View/Edit the related properties

    Click in the icon menu of the "Brochure" document then click on properties

    ![Connector1](./images/012-connector.png)

    The document properties are displayed, you can even change some property value or view "System Properties" and "Versions"
  
    ![Connector1](./images/013-connector.png)

    7\. You can also view the documents in the SalesForce User Interface, document formats such as pdf or jpeg will be displayed

    Click in the icon menu of the "Brochure" document then click on view

    ![Connector1](./images/014-connector.png)

    The document content is displayed

     ![Connector1](./images/015-connector.png)

    8\. You can update a new version of a document using the user interface by using the icon menu of the "Brochure" document then click on "Upload New Version"

     ![Connector1](./images/016-connector.png)

     In the next screen you should select the new file to upload and click "Upload"

     ![Connector1](./images/017-connector.png)

     9\. To Dowload..........


    [Go to top](#lab-section-3) | [Go to Getting Started Lab](#getting-started-lab)

## 4. Summary
<a name="lab-section-4"></a>

??? note SUMMARY "Expand to view"

    As you saw, FileNet Salesforce Connector enables secure and compliant IBM Filenet content access through the use of the Salesforce web user interface, uploading viewing and editing documents and associate them with Salesforce records within one single user interface greatlly improve the accesibility needed by users to execute their daily tasks.

    
    [Go to top](#lab-section-9) | [Go to Getting Started Lab](#getting-started-lab)

## 5. Troubleshooting
<a name="lab-section-5"></a>
??? note SUMMARY "Expand to view"

    1\. Using Salesforce UI 
    Chrome/Firefox are the recommended browsers to display the document viewer and work with documents from the Accounts Tab. 

    [Go to top](#lab-section-10) | [Go to Getting Started Lab](#getting-started-lab)

***

# Additional Assets

**additional assets to explore**

## 100. GraphQL
<a name="additional-assets-110"></a>
??? note SUMMARY "Expand to view"
    Video: <a href="https://ibm.biz/SimplifyDevelopmentFileNetGraphQL" target="_blank">Simplify Development using the FileNet GraphQL API (7:18)</a>

    ![Simplify Development FileNet GraphQL Video](./images/additional-assets/FileNetGraphQL-Thumbnail-Intro.png)

    The FileNet GraphQL API enables you to query and manipulate data easily through an intuitive and flexible syntax that simplifies application development for your Content Platform Engine. The API allows you to request the exact information you need and receive predictable results reducing the number of network calls and bandwidth requirements improving performance.

    [Go to top](#additional-assets) | [Go to Introduction](#introduction) | [Go to Getting Started Lab](#getting-started-lab)



## 101. Salesforce Integration
<a name="additional-assets-130"></a>
??? note SUMMARY "Expand to view"
    Video: <a href="https://ibm.biz/FileNetSalesforce" target="_blank">Salesforce CRM Content to FileNet (6:29)</a>

    ![FileNet Saleforce Video](./images/additional-assets/SalesforceOverview2.png)

    Seamlessly connect Salesforce with FileNet Content Manager to eliminate a content silo and manage Salesforce content within the leading, modern FileNet Content Manager platform. This native integration allows Salesforce users to store and manage related content seamlessly in FileNet Content Manager as it relates to Salesforce accounts, cases, opportunities, and more. They will no longer need to switch applications to find related information. With a Salesforce-oriented user experience, this connector will require minimal to no training, and IT teams can take advantage of the feature-rich content management capabilities of FileNet and govern enterprise content in one place.

    [Go to top](#additional-assets) | [Go to Introduction](#introduction) | [Go to Getting Started Lab](#getting-started-lab)
