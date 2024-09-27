
# [IBM Business Automation Reference Architecture](https://ibm-cloud-architecture.github.io/refarch-dba)


This project represents the body of knowledge around business automation solution implementation and
reference architecture and can be considered as a living book, we are writing on a daily basis from the experience gathered with our engagements.
All the content is visible [as a BOOK format here](https://ibm-cloud-architecture.github.io/refarch-dba).

The content of this repository is the source of the digital business automation reference architecture in the [IBM Garage architecture center visible here](https://www.ibm.com/cloud/architecture/architectures/dba-architecture). This git repository is maintained on a weekly basis and includes more content not yet formally published to IBM sites. As we are implementing the end to end solution we are updating this main git repository to keep best practices accurate.

### Building this booklet locally

The content of this repository is written with markdown files, packaged with [MkDocs](https://www.mkdocs.org/) and can be built into a book-readable format by MkDocs build processes.

1. Install MkDocs locally following the [official documentation instructions](https://www.mkdocs.org/#installation).
1. Install MkDocs PDF export following [its documentation](https://github.com/zhaoterryy/mkdocs-pdf-export-plugin).
1. Install Material plugin for mkdocs:  `pip install mkdocs-material`
2. `git clone https://github.com/ibm-cloud-architecture/refarch-dba` _(or your forked repository if you plan to edit)_
3. `cd refarch-dba`
4. `mkdocs serve`
5. Go to `http://127.0.0.1:8000/` in your browser.

If you wish to generate PDF files, substitute `EXPORT_PDF_EXPORT=1 mkdocs
serve` for the command above. You can use `EXPORT_PDF_EXPORT=1 mkdocs build` to
create a `public` directory tree that includes the PDF docs for local browsing.

### Building this booklet locally but with docker

In some cases you might not want to alter your Python setup and rather go with a docker image instead. This requires docker is running locally on your computer though.

* docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
* Go to http://127.0.0.1:8000/ in your browser.


### Automatic deployment on github

This project includes a `.github` folder to define a git action workflow to build the pages when content is pushed to github.

## Contributors

* Lead Content developer [Jeff Goodhue](https://www.linkedin.com/in/jeffreygoodhue/)
* Content developer [Thomas Yang](https://www.linkedin.com/in/thomasyang44/)
* Content developer [Pierre Berlandier](https://www.linkedin.com/in/pierreberlandier/)
